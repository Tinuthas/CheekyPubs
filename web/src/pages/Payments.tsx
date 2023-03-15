import { AxiosError } from "axios"
import { MRT_ColumnDef } from "material-react-table"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import DataTableCustom from "../components/DataTableCustom"
import { DialogListModal } from "../components/DialogListModal"
import { api, getToken } from "../lib/axios"

const selectPromise = (inputValue: string) => new Promise<any[]>((resolve, reject) => {
  api.get('owners/select', { params: { name: inputValue}, headers: { Authorization: getToken()}}).then(response =>{
    var data = response.data
    var listData:any[] = []
    data.forEach((element:any) => {
      listData.push({value: element.id, label: element.name})
    });
    resolve(listData)
  }).catch((err: AxiosError) => {
    const data = err.response?.data as {message: string}
    toast.error(`Unidentified error: ${data.message || err.message}`, { position: "top-center", autoClose: 5000, })
    throw new Error(`Unidentified error: ${data.message || err.response?.data || err.message}`);
  })
})



export function Payments(){

  const [payments, setPayments] = useState([{}])
  const [extracts, setExtracts] = useState([{}])
  const [openIndex, setOpenIndex] = useState(-1)
  const [openListModal, setOpenListModal] = useState(false)

  function handlePayments() {
    api.get('payment', {
      headers: {
        Authorization: getToken()
      }
    }).then(response =>{
      setPayments(JSON.parse(JSON.stringify(response.data)))
    }).catch((err: AxiosError) => {
      const data = err.response?.data as {message: string}
      toast.error(`Unidentified error: ${data.message || err.message}`, { position: "top-center", autoClose: 5000, })
    })
  }

  function updateDataRow(data: any) {
    const cloneData = JSON.parse(JSON.stringify(data))
    delete cloneData.id;
    delete cloneData.date;
    const promise = new Promise((resolve, reject) => {
      api.put('payment', cloneData, {
        params: {
          id: (data as any).id
        },
        headers: {
          Authorization: getToken()
        }
      }).then(response => {
        toast.success(`Updated vaccine: ${response.data?.id}`, { position: "top-center", autoClose: 1000, })
        resolve(`Updated vaccine: ${response.data?.id}`);
      }).catch((err: AxiosError) => {
        const data = err.response?.data as {message: string}
        toast.error(`Unidentified error: ${data.message || err.response?.data ||err.message}`, { position: "top-center", autoClose: 5000, })
        throw new Error(`Unidentified error: ${data.message || err.response?.data || err.message}`);
      })
    })
    return promise
  }

  function deleteDataRow(id: number) {
    const promise = new Promise((resolve, reject) => {
      api.delete('payment', {
        params: {
          id,
        },
        headers: {
          Authorization: getToken()
        }
      }).then(response => {
        toast.success(`Deleted vaccine: ${response.data?.id}`, { position: "top-center", autoClose: 1000, })
        resolve(`Deleted vaccine: ${response.data?.id}`);
      }).catch((err: AxiosError) => {
        const data = err.response?.data as {message: string}
        toast.error(`Unidentified error: ${data.message || err.response?.data || err.message}`, { position: "top-center", autoClose: 5000, })
        throw new Error(`Unidentified error: ${data.message || err.response?.data || err.message}`);
      })
    });
    return promise
  }

  function createNewRow(data: any) {
    var newData = {owner_id: Number(data['owner']), value: Number(data.value), description: data.description};
  
    const promise = new Promise((resolve, reject) => {
      api.post('payment', newData, {
        headers: {
          Authorization: getToken()
        }
      }).then(response => {
        toast.success(`Created payment: ${response.data?.id}`, { position: "top-center", autoClose: 1000, })
        //resolve(`Created payment: ${response.data?.name}`);
        handlePayments()
      }).catch((err: AxiosError) => {
        const data = err.response?.data as {message: string}
        toast.error(`Unidentified error: ${data.message || err.response?.data || err.message}`, { position: "top-center", autoClose: 5000, })
        throw new Error(`Unidentified error: ${data.message || err.response?.data || err.message}`);
      })
    });
    return promise
  }

  const headersExtracts:MRT_ColumnDef<any>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 90,
      enableEditing: false,
    },
    {
      accessorKey: 'date',
      header: 'Date',
      size: 150,
      enableEditing: false,
    },
    {
      accessorKey: 'value',
      header: 'Value',
      size: 130,
      Cell: ({ renderedCellValue, row }) => (
        <>
          { Number(row.original.value) <= 0 ?
            <span className="text-red-600 font-medium">{renderedCellValue}</span>
          :
            <span className="text-green-600 font-medium">{renderedCellValue}</span>
          }
        </>
      )
    },
    {
      accessorKey: 'description',
      header: 'Description',
      size: 300,
    }
  ]

  function callListExtracts(id: number) {
    api.get('payment/extracts', {
      params: {
        id,
      },
      headers: {
        Authorization: getToken()
      }
    }).then(response =>{
      setExtracts(JSON.parse(JSON.stringify(response.data)))
    }).catch((err: AxiosError) => {
      const data = err.response?.data as {message: string}
      toast.error(`Unidentified error: ${data.message || err.message}`, { position: "top-center", autoClose: 5000, })
    })
  }

  const headers:MRT_ColumnDef<any>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      size: 150,
    },
    {
      accessorKey: 'extracts',
      header: 'Count',
      size: 80,
      Cell: ({ renderedCellValue, row }) => (
        <>
          <div className="w-full cursor-pointer" onClick={() => {
            setOpenListModal(true)
            setOpenIndex(row.original.id)
          }}>
            <span>{renderedCellValue}</span>
          </div>
          {row.original.id == openIndex && openListModal ? 
            <DialogListModal 
              open={openListModal}
              onClose={() => setOpenListModal(false)}
              onSubmit={() => console.log('submit')}
              name={row.original.name}
              callInit={() => callListExtracts(row.original.id)}
              data={extracts}
              setData={setExtracts}
              headers={headersExtracts}
              deleteRow={(id) => deleteDataRow(id)}
              updateRow={(data) => updateDataRow(data)}
            />
          : null}
        </>
      )
    },
    {
      accessorKey: 'total',
      header: 'Total Valor',
      size: 80,
      Cell: ({ renderedCellValue, row }) => (
        <div className="w-full cursor-pointer" onClick={() => {
          setOpenListModal(true)
          setOpenIndex(row.original.id)
        }}>
          { row.original.total > 0 || row.original.total < 0 ?
            <span className="text-red-600 font-medium">{renderedCellValue}</span>
          :
            <span className="text-green-600 font-medium">{renderedCellValue}</span>
          }
        </div>
      )
    },
  ]

  const columnHeadersPayment = [
    {
      accessorKey: 'owner',
      label: 'Owner',
      name: 'Choose owner',
      type: "select",
      required: true,
      getDataSelect: selectPromise
    },
    {
      accessorKey: 'value',
      label: 'Value',
      name: 'Ex: 12.5',
      type: "number",
      required: true,
    },
    {
      accessorKey: 'description',
      label: 'Description',
      name: 'Ex: Gromming ...',
      type: "text",
    },
  ]

  useEffect(() => {
    handlePayments()
  }, [])

  return (
    <div className="md:p-10 pt-4 h-full flex flex-col items-center">
      <h1 className="font-medium text-3xl md:text-4xl text-white">Payments</h1>
      
      <div className="md:flex bg-white w-full mt-4 rounded">
        <DataTableCustom 
          headers={headers} 
          data={payments} 
          setData={(data) => setPayments(data)} 
          title="Payments"
          createData={columnHeadersPayment}
          createRow={(data) => createNewRow(data)}
        />
      </div>
    </div>
  )
}