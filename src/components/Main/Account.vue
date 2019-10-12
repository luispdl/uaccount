<template>
    <div>
            <div class="card">
                <table class="table table-striped">
                  <thead>                  
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Cuenta</th>
                      <th>Tipo</th>
                      <th>Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key='account.id' v-for="(account, key) in accounts">
                      <td>{{ key + 1}}</td>
                      <td>{{ account.bank }}</td>
                      <td>{{ account.type }}</td>
                      <td><span class="">${{ account.amount }} </span></td>
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
            accounts: []
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