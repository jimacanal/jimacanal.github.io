<script>
    // Verificar si la cookie 'aviso_aceptado' está presente
    if (!document.cookie.includes('aviso_aceptado=true')) {
        document.getElementById('aviso-legal').style.display = 'block';
    }

    // Función para aceptar el aviso y establecer la cookie
    function aceptarAviso() {
        document.getElementById('aviso-legal').style.display = 'none';
        // Establecer una cookie que indica que el aviso ha sido aceptado
        document.cookie = 'aviso_aceptado=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    }
</script>
