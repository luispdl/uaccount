<template>
<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                <div class="card mt-3">
                    <div class="card-header p-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><router-link class="nav-link active" to="/main/account" data-toggle="tab">Cuentas</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/main/investments" data-toggle="tab">Inversiones</router-link></li>
                        <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Transferencias</a></li>
                    </ul>
                    </div><!-- /.card-header -->
                    <div class="card-body">
                    <div class="tab-content">
                        <router-view></router-view>
                        <!-- /.tab-pane -->
                    </div>
                    <!-- /.tab-content -->
                    </div><!-- /.card-body -->
                </div>
                
            </div>  
            <div class="col-md-4">
                <!-- Profile Image -->
                    <credit-card/>
                <!-- /.card -->
            </div>  
        </div>
    </div>

</section>
</template>

<script>
import CreditCard from '../CreditCard'
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  components: {
      CreditCard
  }
}
</script>