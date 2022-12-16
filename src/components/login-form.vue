<template>
    <div>
        <div class="card col-sm-3 mx-auto m-3">
            <div class="card-body">
                <div class="mb-3">
                    <label>correo electronico</label>
                    <input type="email" class="form-control" placeholder="ej: asdf@gmail.com" v-model="this.input.email" required>
                </div>
                <div class="mb-3">
                        <div class="form-floating">
                            <input type="password" class="form-control" placeholder="askjd" v-model="this.input.password" required>
                            <label>contraseña</label>
                        </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button  type="button" class="btn btn-primary" v-on:click="login">Iniciar sesión</button>
                </div>
            </div>
        </div>
        <div class="col-sm-3 mx-auto m-3">
            <p>
            ¿No tienes una cuenta? 
            <router-link to="/signup">
                Registrate 
            </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            nombre: null,
            token: null,
            id: null,
            input:{
                email: null,
                password: null,
            },
        }
    },
    methods: {
        login(){
                axios.post("http://localhost:3000/auth/login", this.input)
                    .then((response) => {
                        console.log(response)
                        if(response.data.message == "sesion iniciada con exito"){
                            this.token = response.data.token;
                            this.nombre = response.data.nombre;
                            this.id = response.data.id
                            this.persist()
                            return this.$router.push('/')
                        }
                        // eslint-disable-next-line no-constant-condition
                        if (response.data == "Usuario o contraseña incorrecta" || 'El usuario no existe') {
                            const mensaje = 'Usuario o contraseña incorrecta'
                            return alert(mensaje)
                        }
                        if (response.data.status == 500) {
                            const mensaje = "Error en el servidor"
                            return alert(mensaje)
                        }
                    });
                
            },
            persist(){
                localStorage.token = this.token
                localStorage.nombre = this.nombre
                localStorage.ID = this.id
            },

    },
}
</script>