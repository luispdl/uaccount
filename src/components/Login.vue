<template>
    <div class="container text-center">
        <div class="card col-md-4 offset-4">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Iniciar Sesión</p>

                <form action="" method="post">
                    <div class="input-group mb-3 primary-input-group">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">
                                <i class="mdi mdi-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data: function() {
return {

    };
}
}
</script>