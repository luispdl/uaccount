<template>
    <div>
        <div class="card">
            <table class="table table-striped">
                <thead>                  
                <tr>
                    <th style="width: 10px">#</th>
                    <th>Cuenta</th>
                    <th>Cbu</th>
                    <th>Tipo</th>
                    <th>Monto</th>
                </tr>
                </thead>
                <tbody>
                <tr :key='account.id' v-for="(account, key) in accounts">
                    <td>{{ key + 1}}</td>
                    <td>{{ account.bank }}</td>
                    <td>{{ account.cbu }}</td>
                    <td>{{ account.type }}</td>
                    <td><span class="">${{ account.amount }} </span></td>
                </tr>
                </tbody>
            </table>
            </div>
            <!-- /.card-body -->
        <v-btn
            @click="abrirCuenta"
            absolute
            dark
            fab
            bottom
            right
            color="cyan accent-2"
            >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregar Cuenta</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Cbu/Alias</label>
                        <input v-model="cbu" type="text" class="form-control" id="recipient-name">
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button @click="guardarCuenta" type="button" class="btn btn-primary">Guardar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Account',
    data: function () {
        return {
            accounts: [],
            cbu: ''
        }
    },
    beforeMount() {
        axios({
            url: 'http://www.mocky.io/v2/5da1cdf22f00006e00f418ae',
            method: 'get'
        }).then(response => {
            this.accounts = response.data.accounts;
        })
    },
    methods: {
        abrirCuenta() {
            $("#exampleModal").modal('show');
        },
        guardarCuenta() {
            $("#exampleModal").modal('hide');
            this.accounts.push({
                "bank": this.cbu,
                "cbu": this.cbu,
                "amount": Math.round(Math.random() * 10000),
                "type": "Cuenta Corriente"
            });
            this.cbu = '';
        }
            
    }
}
</script>