
const templates={
    contact:`

    <div id="contenedor">          
    <br>   
        <div class="item2" >
            <div id="contact" >
                <h2>Contacto</h2>
                <p>Podes escribirme si queres a : <a :href=  ' "mailto:"+mail'   >{{mail}}</a></p>       
            </div>
        </div>
        </div>`,
    galeria:`
    <section class="main">
                       
        <div class="content">
            <br>
           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bzoJHsybxn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="item3" >
        </div>
        <div class="item3" >
        </div>
    </div>`,
    escribime:`
    <div class="content">

    <div class="contact-wrapper animated bounceInUp">
   
    <div class="contact-form">
            <h3>Escribime</h3>
          
            <form action="show_data.html"  @submit="checkForm">
            <p v-if="errors">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
            </p>
          
                    
                <p>
                    <label>Nombre *</label>
                    <input v-model="nombre" type="text" name="nombre" required>
                </p>
                <p>
                    <label>Apellido *</label>
                    <input v-model="apellido" type="text" name="apellido" required>
                </p>
                <p>
                    <label>Celular</label>
                    <input v-model="celular" type="tel" name="celular">
                </p>
                <p>
                    <label>E-Mail *</label>
                    <input type="email" name="email" v-model="email" required>
                </p>
                <p class="block">
                   <label>Mensaje</label> 
                    <textarea name="message" rows="3"></textarea>
                </p>
                <p class="block">
                    <button>
                        Enviar
                    </button>
                </p>
            </form>
        </div>
       
    </div>

</div>
            `,
            escribime2:`
            <div class="formulario">  
                <h3 align="center">Escribime!!!</h3>
                <form action="show_data.html" target="_blank" >

                <label for="nombre">Nombre: <span class="obligatorio">*</span></label>
                <input type="text" id="nombre" name="firstname" placeholder="Your name.."  ><br>
              
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="lastname"  placeholder="Your lastname.."><br>
        
                <label for="email">E-mail:</label>
                <input type="email"  name="email" ><br>
        
                <label for="cel">Celular:</label>
                <input type="text"  name="cel" ><br>
        
                <label>Comentarios:</label>
                <textarea name="comentario" rows="" ></textarea>
                
                <input type="submit" v-on:click="Alertar(2)" class="submit" value="Enviar" >
                <br>
                <br>
                </form> 
        </div>
        `,
        prueba:`
        <section class="main">
                       
                <div class="content">
                    <br>
                    <h1>Proximos shows</h1>
                    <div id="contenedor">  
                        <div class="tarjeta"  v-for="elemento in gatos"> 
                            <img v-bind:src="'assets/images/'+elemento.imagen" v-bind:alt="elemento.alt"/>
                            <h4>{{elemento.titulo}}</h4>
                            <p>{{elemento.texto}}</p>
                    </div>
                </div>
            </div>
    </section>
    `
}
var galeria={
    template:`
    <section class="main">
                       
        <div class="content">
            <br>
           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bzoJHsybxn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="item3" >
        </div>
        <div class="item3" >
        </div>
    </div>`
}
var show = {
	template: `<section class="main"><div class="content">
        <br>
        <h1>Proximos shows</h1>
        <div id="contenedor">  
            <div class="tarjeta"  v-for="elemento in gatos"> 
                <img v-bind:src="'assets/images/'+elemento.imagen" v-bind:alt="elemento.alt"/>
                <h4>{{elemento.titulo}}</h4>
                <p>{{elemento.texto}}</p>
        </div>
    </div>
</div>
</section>`,
data:function () {return {
                
    gatos:[
        {
            imagen:"show1.jpeg",
            alt:"Gatitos Duermen",
            titulo: "Domingo 26 de Junio de 2022",
            texto:"Brako Bar, Alem 283, Ramos Mejia"
        },
        {
            imagen:"show2.jpeg",
            alt: "Gatitos Lindos",
            titulo: "Miercoles 18 de Mayo de 2022",
            texto:"Vale Reir, Casa Jache"
        },
        {
            imagen:"show3.jpeg",
            alt: "Viernes 24 de Junio de 2022",
            titulo: "Kaputt",
            texto:"Teatro el Cubo"
        }/*,
        {
            imagen:"",
            alt: "",
            titulo: "",
            texto:""
        },
        {
            imagen:"",
            alt: "",
            titulo: "",
            texto:""
        },
        {
            imagen:"",
            alt: "",
            titulo: "",
            texto:""
        },
        {
            imagen:"",
            alt: "",
            titulo: "",
            texto:""
        }*/
    ]
         }},
props: [],methods: {
    Alertar: function (message, event) {
      // ahora tenemos acceso al evento nativo.
      if (event) event.preventDefault()
      alert(message)
    }
  }

}
var home = {
	template: `
<div id="contenedor">             
    <div id="logo-contenedor">
       
            <img src="assets/images/sebas.jpg"/>
    </div>
  
    <div id="contenedor">             
        <div class="item2" >
            <h2 align="center">Quien soy?</h2>
            <p align="justify">Me llamo Sebastián Contente, si Contente, imaginate la presión: vas a ver a un comediante, 
            y se llama Contente. Te tengo que hacer reir si o si, es como si vas a castrar a tu mascota y el veterinario es
            de apellido Castro.
            Llevo apenas 3 años con esta pasión que es el standup.
            <br>Te invito a que me conozcas, por eso en este sitio vas a poder ver cuando actúo, donde actúo, y hasta como actúo. 
            <br>Y si te gusta lo que hago, te vas a poder contactar conmigo, por eso
            en la galeria tenes partes de mis shows y ls mejores fotos (ponele que hay exceso de photoshop).</p><br><br>                   </div>
        </div>
        <div id="contenedor" >
            <div class="tarjeta2">
                <router-link to = "/shows" class="link"> Proximos Shows</router-link>
            </div> 
            <div class="tarjeta2">
                <router-link to = "/galeria" class="link"> Visita la galería</router-link>
            </div> 
            <div class="tarjeta2">
                <router-link to = "/escribime" class="link"> Escribime!!</router-link>
            </div> 
        </div>
    </div>
</div>
    `,
}
var contacto ={
template:
        `<div id="contenedor">          
        <br>   
        <div class="item2" >
            <div id="contact" >
               <br>
                <h2 align="center">Contacto</h2>
                <p>Podes escribirme si queres a : <a :href=  ' "mailto:"+mail'   >{{mail}}</a></p>       
            </div>
        </div>
    </div>`
,
data: function () {return {
    mail:"sebaconte@gmail.com",
    }   }



}
var escribime={
    template:`
    <div class="content">

    <div class="contact-wrapper animated bounceInUp">
   
    <div class="contact-form">
            <h3>Escribime</h3>
          
            <form action="show_data.html"  @submit="checkForm">
            <p v-if="errors">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
            </p>
          
                    
                <p>
                    <label>Nombre *</label>
                    <input v-model="nombre" type="text" name="nombre" required>
                </p>
                <p>
                    <label>Apellido *</label>
                    <input v-model="apellido" type="text" name="apellido" required>
                </p>
                <p>
                    <label>Celular</label>
                    <input v-model="celular" type="tel" name="celular">
                </p>
                <p>
                    <label>E-Mail *</label>
                    <input type="email" name="email" v-model="email" required>
                </p>
                <p class="block">
                   <label>Mensaje</label> 
                    <textarea name="message" rows="3"></textarea>
                </p>
                <p class="block">
                    <button>
                        Enviar
                    </button>
                </p>
            </form>
        </div>
       
    </div>

</div>
            `,
methods:{
        checkForm: function (e) {
            
            if (this.celular){
                let bcel=Number.isInteger(parseInt(this.celular));
                
                if (!bcel){
                    alert("Atención, el celular debe ser una valor numérico");
                }
                else
                    if(parseInt(this.celular)<999999999){
                        alert("Atención, el celular debe constar de al menos 10 dígitos");
                    }else
                    {                    
                        return true;
                    }

            }else
                return true;
            e.preventDefault();
        }
        },
    props: []
}
var routes = [
	{path: "/", component: home},
	{path: "/shows", component: show},
	{path: "/contacto", component: contacto},
	{path: "/escribime", component: escribime},
	{path: "/galeria", component: galeria},
	{path: "/", redirect: "/home"}
]

var router = new VueRouter({
	routes
})
var app=new Vue({
    el:"#app",
    router: router,  
    data: {
        errors: [2,2],
        nombre: null,
        apellido: null,
        celular:null,
        email: null,
        pepe:1,
        view : 'home',
    }
    ,components: {
      
        sgaleria: {
            data:function () {return {
                
                locales:[
                    {nombre:"Sucursal once",
                    direccion:"Rivadavia 150 - CABA",
                    link:"https://youtu.be/bzoJHsybxn8",
                    iframe: "https://youtu.be/bzoJHsybxn8"   
                    },
                    {nombre:"Sucursal Colegiales",
                    direccion:"Federico Lacroze 2702 - CABA",
                    link:"https://youtu.be/bzoJHsybxn8",
                    iframe: "https://youtu.be/bzoJHsybxn8"   
                    }   ,
                    {nombre:"Sucursal Chacarita",
                    direccion:"Federico Lacroze 3800 - CABA",
                    link:"https://youtu.be/bzoJHsybxn8",
                    iframe: "https://youtu.be/bzoJHsybxn8"   
                    }
                ]
            }},
            props: [],
            template: templates.galeria
        } ,
        rescribime: {
            methods:{
                checkForm: function (e) {
                    
                    if (this.celular){
                        let bcel=Number.isInteger(parseInt(this.celular));
                      
                        if (!bcel){
                            alert("Atención, el celular debe ser una valor numérico");
                        }
                        else
                            if(parseInt(this.celular)<999999999){
                                alert("Atención, el celular debe constar de al menos 10 dígitos");
                            }else
                            {                    
                                return true;
                            }

                    }else
                        return true;
                    e.preventDefault();
                }
              },
            props: [],
            template: templates.escribime 
        },
        delivery: {
            data:function () {return {
                
                bebidas:[
                    {
                        nombre:"Sprite",
                        precio: "120",
                        categoria: "gaseosa",
                        imagen:"https://st.depositphotos.com/2121815/4748/i/950/depositphotos_47482769-stock-photo-bottle-of-sprite-drink-isolated.jpg"
                    },
                    {
                        nombre:"coca cola",
                        precio:"125",
                        categoria:"gaseosa",
                        imagen:"https://st.depositphotos.com/1010050/4422/i/950/depositphotos_44227185-stock-photo-coca-cola-bottle.jpg"
                    }
                ]



            }},
            props: [],
            template: templates.delivery
        },
        show: {
            props: [],methods: {
                Alertar: function (message, event) {
                  // ahora tenemos acceso al evento nativo.
                  if (event) event.preventDefault()
                  alert(message)
                }
              }
        }
    }
    
}
)
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburguesa() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }