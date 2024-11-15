import axios from "axios";
import Global from "./../Global";

export default class ServiceCubos {
    // getToken(logIn) {
    //     return new Promise(function (resolve) {
    //         let request = 'api/auth/login';
    //         let url = Global.urlApiAlumnos + request;
    //         axios.post(url, logIn).then(response => {
    //             resolve(response.data.response);
    //         })
    //     })
    // }

    getCubos() {
        return new Promise(function (resolve) {
            let request = 'api/Alumnos/FiltrarCurso/2024';
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

}