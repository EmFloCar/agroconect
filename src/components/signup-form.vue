<template>
    <div>
        <div class="card col-sm-5 mx-auto m-3">
            <div class="card-body">
                    <div class="mb-3">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="this.nuevoUsuario.nombre" required>
                    </div>
                    <div class="mb-3">
                        <label>Celular</label>
                        <input type="number" class="form-control" v-model="this.nuevoUsuario.celular" required>
                    </div>
                    <div class="mb-3">
                        <label>correo electronico</label>
                        <input type="email" class="form-control" placeholder="ej: asdf@gmail.com"
                            v-model="this.nuevoUsuario.email" required>
                    </div>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-6 form-floating">
                                <input type="password" class="form-control" placeholder="askjd"
                                    v-model="this.nuevoUsuario.password" required>
                                <label>contraseña</label>
                            </div>
                            <div class="col-6 form-floating">
                                <input type="password" class="form-control" placeholder="askjd"
                                    v-model="this.secondPassword" required>
                                <label>confirmar contraseña</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" v-on:click="registrarUsuario">Registrarse</button>
                    </div>
            </div>
        </div>
                <div class="col-sm-3 mx-auto m-3">
            <p>
            ¿Ya tienes una cuenta? 
            <router-link to="/login">
                Inicia sesión 
            </router-link>
            </p>
        </div>
        <!-- {{ $data }} -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            nuevoUsuario: {
                nombre: null,
                celular: null,
                email: null,
                password: null,
            },
            secondPassword: null,
            ok: false

        }
    },
    methods: {
        registrarUsuario() {
            const isEmpty = Object.values(this.nuevoUsuario).some(x => (x === null))
            const isMatch = this.verifyPassword(this.nuevoUsuario.password, this.secondPassword)
            if (isMatch == false) {
                alert("Las contraseñas no coinciden")
                return console.log("Las contraseñas no coinciden")
            }else if(isEmpty==true){
                alert("completa todos los campos")
                return console.log("completa todos los campos")
            }
            axios.post("http://localhost:3000/auth/signup", this.nuevoUsuario).then(response => { console.log(response) })
            return this.$router.push('/login')
        },

        verifyPassword(password1, password2) {
            if (password1 === password2) {
                return true
            } else {
                return false
            }
        },
        // validation() {
        //     (() => {
        //         'use strict'

        //         // Fetch all the forms we want to apply custom Bootstrap validation styles to
        //         const forms = document.querySelectorAll('.needs-validation')

        //         // Loop over them and prevent submission
        //         Array.from(forms).forEach(form => {
        //             form.addEventListener('submit', event => {
        //                 if (!form.checkValidity()) {
        //                     event.preventDefault()
        //                     event.stopPropagation()
        //                 }

        //                 form.classList.add('was-validated')
        //             }, false)
        //         })
        //     })()
        // }
    },
}
</script>

<script>


</script>