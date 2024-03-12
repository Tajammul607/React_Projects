import { useEffect, useState } from "react";
import { PaginationData, User } from "./Components/types";
import { Container,Table,TableContainer } from "./Components/styles";


// https://www.codementor.io/@hurwitzse/let-s-build-a-react-pagination-component-1ttv5014ss
 
 const App:React.FC =()=>{

  const [data,setData] =useState<PaginationData<User>>();
  const [limit,setLimit] = useState(10);
  const [offset,setOffset]= useState(0);

  useEffect(()=>{
    const getData=async () => {
      const tableData=(await import('./Components/getTableData')).default<User>({
        limit,
        offset,
      })
      setData(tableData)
    };
    getData();

  },[limit,offset])
  return (
    <Container>
    
       <TableContainer>
        <Table>
           <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
           </thead>
           <tbody>
            {data?.data.map((user)=>{
              return(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
           </tbody>
           </Table>
       </TableContainer>
    </Container>
  )
 }

 export default App;