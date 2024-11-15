import axios from "axios";
import Global from "./../Global";

export default class ServiceCubos {
    getToken(logIn) {
        return new Promise(function (resolve) {
            let request = 'api/Manage/Login';
            let url = Global.urlApiCubo + request;
            axios.post(url, logIn).then(response => {
                resolve(response.data.response);
            })
        })
    }

    getCubos() {
        return new Promise(function (resolve) {
            let request = 'api/Cubos';
            let url = Global.urlApiCubo + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    findCubo(id) {
        return new Promise(function (resolve) {
            let request = 'api/Cubos/' + id;
            let url = Global.urlApiCubo + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    findCuboComentarios(id) {
        return new Promise(function (resolve) {
            let request = 'api/ComentariosCubo/GetComentariosCubo/' + id;
            let url = Global.urlApiCubo + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    getMarcasCubos() {
        return new Promise(function (resolve) {
            let request = 'api/Cubos/Marcas';
            let url = Global.urlApiCubo + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    findCubosByMarca(marca) {
        return new Promise(function (resolve) {
            let request = 'api/Cubos/CubosMarca/' + marca;
            let url = Global.urlApiCubo + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    getPerfilUserToken() {
        return new Promise(function (resolve) {
            let request = 'api/Manage/PerfilUsuario';
            let url = Global.urlApiCubo + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + Global.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }

    findComprasUser() {
        return new Promise(function (resolve) {
            let request = 'api/Compra/ComprasUsuario';
            let url = Global.urlApiCubo + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + Global.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }

    comprarCubo(id) {
        return new Promise(function (resolve) {
            let request = 'api/Compra/InsertarPedido/' + id;
            let url = Global.urlApiCubo + request;
            axios.post(url, '', {
                headers: {
                    'Authorization': 'Bearer ' + Global.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }
}