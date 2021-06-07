const gulp = require('gulp');//importamos desde el paket json
const sass = require('gulp-sass');//importamos desde el paket json
const autoprefixer = require('gulp-autoprefixer');//importamos desde el paket json

//declaramos un funcion
function css() {
    return gulp//gulp funciona como funcions de en cadena
        .src('scss/app.scss')//esta ela entrada (en que parte va encontrar el archivo para hacer correr  el scss)
        .pipe(autoprefixer() )//esta es un funcion 
        .pipe(sass({ outputStyle: "expanded" }))//como se va a copilar : //nested,compact,expanded, compressed
        .pipe(gulp.dest('css'))//esta es la salida donde se va aalmacenar (gulp va generar la carpeta y archivo,
}
//revisa los archivos que esten adentro de la funcion 
function watchArchivos() {
    //que archivos quieres que este revisando por cambios
    //que revice o escuche todos los cambios con terminacion *.scss
    gulp.watch('scss/*.scss', css);
    //que revise todos los cambios que se realizan en index.html
    gulp.watch('index.html');
}
// tasks (las tareas)
gulp.task('css', css);
//para ejecutar la funcion whatArchivos, que estara en escucha viendo los cambios del index.html y app.css
gulp.task('watch', gulp.parallel(watchArchivos));