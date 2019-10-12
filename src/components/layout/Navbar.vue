<template>
<div>
    <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light m-2 p-0">
    <!-- Left navbar links -->
    <ul class="navbar-nav m-0 p-0">
        <img src="../../../src/assets/logo.jpg" alt="" width="64px" height="64px">
    </ul>
    
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto align-items-center">
      <!-- Notifications Dropdown Menu -->
      <li><em>  Pedro Martinez</em></li>
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fas fa-th-large"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> Utilidades
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> Reportes
          </a>
        </div>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
  
  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div>
      <ul>
        <li>Utilidades</li>
      </ul>
    </div>
  </aside>
  <!-- /.control-sidebar -->
</div>
</template>
<script>
export default {
    name: 'Navbar',
    data: function() {
    return {
      
    }
  },
}
</script>