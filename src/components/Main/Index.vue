<template>
<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-9">
                <div class="card">
                    <div class="card-header p-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">Cuentas</a></li>
                        <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Inversiones</a></li>
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
            <div class="col-md-3">
                <!-- Profile Image -->
                <div class="card card-primary card-outline">
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>  
        </div>
    </div>
</section>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
    }
  },
}
</script>