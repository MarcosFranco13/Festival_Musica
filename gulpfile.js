import {src, dest, watch,series} from 'gulp'
// series permite ejecutar una tarea y despues otra, por lo que se puede ejecutar multiples tareas
//parallel permite arracanr al mismo tiempo todas la tareas
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

import terser from 'gulp-terser'

export function js(done){
    src('src/js/app.js')
        .pipe(terser())
        .pipe(dest('build/js'))
        
    done()
}

export function css(done){
    src('src/scss/app.scss', {sourcemaps:true})//Ubicamos el archivo
         .pipe(sass({style:'compressed'}).on('error', sass.logError)) //aplica sass
         .pipe(dest('build/css', {sourcemaps: true})) //Destino donde almacenamos el archivo

    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)//indicamos el archivo que este en observación y que funcion se ejecute cuando existan cambios
    //Cambiamos el nombre de app.scss por uno mas generico que nos permita encontrar mas archivos que tengan .scss
    //Entonces en src y scss **buscara todos las carpetas que esten dentro entonces * todos los archivos que tenga la extension .scss
    watch('src/js/**/*.js', js)
}

export default series(js,css, dev)