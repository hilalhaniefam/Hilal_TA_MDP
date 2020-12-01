import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class DaftarMahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      visible: false,
    };
  }

handleButton = (first_name) => {
    alert(first_name);
  };
  handleModal = (results) => {
    this.setState({
      visible: true,
    nama : results.first_name + ' ' + results.last_name,
    });
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "https://reqres.in/api/users",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
            listData: data.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="boxWhite" style={{ backgroundColor: "black" }}>
          <center>
            <h1 style={{ color: "white" }}> Daftar Mahasiswa</h1>
          </center>
          <Modal
            title="Detail Mahasiswa"
            centered
            visible={this.state.visible}
            onOk={() => this.setState({ visible: false })}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div style={{ textAlign: "left" }}>
              <p style= {{ fontSize: 10}}>Nama Lengkap : {this.state.nama}</p>
              <p style= {{ fontSize: 10}}>NIM          : </p>
              <p style= {{ fontSize: 10}}>Alamat       : </p>
            </div>
          </Modal>

          {this.state.listData.map((results, index) => {
            return (
              <div className="card" key={results.id} style={{ backgroundColor: "white" }}>
                <div className="card-body">
                  <h6 className="card-title" style={{ color: "black", fontSize: 16, fontWeight: 'bold', fontFamily: 'monospace' }}>Nama : {results.first_name} {results.last_name}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                  </h6>
                </div>
                <button
                  className="button"
                  onClick={() => this.handleModal(results)}
                  style={{ color: "white", backgroundColor: "gray" }}
                >
                  {" "}
                    Lihat Detail Mahasiswa
                  </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}