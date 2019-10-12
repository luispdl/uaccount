<template>
    <div>
        <div class="card">
            <table class="table table-striped">
                <thead>                  
                <tr>
                    <th style="width: 10px">#</th>
                    <th>Fecha</th>
                    <th>Tipo Inversion</th>
                    <th>Monto</th>
                    <th>Fecha Vencimiento</th>
                </tr>
                </thead>
                <tbody>
                <tr :key='investment.id' v-for="(investment, key) in investments">
                    <td>{{ key + 1}}</td>
                    <td>{{ investment.fecha }}</td>
                    <td>{{ investment.tipo_inversion }}</td>
                    <td><span class="">${{ investment.monto }} </span></td>
                    <td>{{ investment.fecha_vencimiento }}</td>
                </tr>
                </tbody>
            </table>
            </div>
              <!-- /.card-body -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Account',
    data: function () {
        return {
            investments: [
                {
                    id:1,
                    fecha: "20/12/2019",
                    tipo_inversion: "Plazo FIjo",
                    monto: 25000,
                    fecha_vencimiento:"15/01/2020"
                }
            ]
        }
    },
    beforeMount() {
        axios({
            url: 'http://www.mocky.io/v2/5da1884b300000a65ff8a290',
            method: 'get'
        }).then(response => {
            this.accounts = response.data.accounts;
        })
    }
}
</script>