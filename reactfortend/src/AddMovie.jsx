import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import Api from "./Api";


const AddMovie = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [fathername, setFathername] = useState("");
    const [mothername, setMothername] = useState("");
    const [infoid, setId] = useState(null);
    const [dataall, setData] = useState([]);

    useEffect(() => {
      refreshinformations();
    }, []);
  
    const refreshinformations = () => {
      Api.get("/")
        .then((res) => {
            setData(res.data);
        })
        .catch(console.error);
      };
      
    const onSubmit = (e) => {
      e.preventDefault();
      let item = { name, gender, fathername,mothername };
      Api.post("/", item).then(() => refreshinformations());
    };
  
    const onUpdate = (id) => {
      let item = { name,gender, fathername,mothername };
      Api.patch(`/${id}/`, item).then((res) => refreshinformations());
    };
  
    const onDelete = (id) => {
      Api.delete(`/${id}/`).then((res) => refreshinformations());
    };
  
    function selectdata(id) {
      let item = dataall.filter((datas) => datas.id === id)[0];
      setName(item.name);
      setGender(item.gender);
      setFathername(item.fathername);
      setMothername(item.mothername);
      setId(item.id);
    }

    return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create a new data</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{infoid}Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Father name"
                value={fathername}
                onChange={(e) => setFathername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Mother Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Starring"
                value={mothername}
                onChange={(e) => setMothername(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(infoid)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Father name</th>
                <th scope="col"> Mother Name</th>
              </tr>
            </thead>
            <tbody>
              {dataall.map((datas) => {
                return (
                  <tr key={datas.id}
                  value={datas.value}>
                    <th scope="row">{datas.id}</th>
                    <td> {datas.name}</td>
                    <td>{datas.gender}</td>
                    <td>{datas.fathername}</td>
                    <td>{datas.mothername}</td>
                    <td>
                      <i
                        className="fa fa-pencil-square text-primary d-inline"
                        aria-hidden="true"
                        onClick={() => selectdata(datas.id)}
                      >Edit</i>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(datas.id)}
                      >Delete </i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AddMovie;