![BrightCoders Logo](img/logo-bc.png)

# Alerta Covid App

![cover](img/cover.jpg)
New visualisation of the Covid-19 virus. <span>Photo by <a href="https://unsplash.com/@fusion_medical_animation?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Fusion Medical Animation</a> on <a href="https://unsplash.com/s/photos/covid?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

El propósito de esta aplicación es llevar un registro de los lugares o espacios que ha visitado una persona y en caso de identificarse a una persona contagiada o posiblemente contagiada por COVID, alertar a quienes estuvieron en ese lugar para que de manera oportuna adopten medidas preventivas. La aplicación puede ser utilizada por instituciones educativas o empresas para alertar a sus empleados, alumnos y/o maestros sobre posibles contagios en su entorno.

La aplicación esta compuesta por:

- Una aplicación móvil, que utilizando códigos QR registra la presencia de una persona en un lugar. También, sirve para registrar el estado de salud de los usuarios y alerta sobre posibles contagios en los lugares que visitó.

- Una aplicación web, que permite administrar la información que se requiere o se envía desde la aplicación móvil

Ambas aplicaciones comparten información de una misma base de datos y es la aplicación web la que proporciona los servicios de acceso a la aplicación móvil.

## Requerimientos

De manera especifica la Aplicación móvil  deberá cumplir con las siguientes funciones:

- `Inicio de sesión` Permite a los usuarios iniciar su sesión indicando su correo electrónico y clave de acceso. También deberá contar con algún mecanismo para re-establecer la clave en caso de que el usuario la hubiera olvidado.

- `Lugares` Mostrar un historial de los lugares que el usuario ha visitado en los últimos 10 días, así como el resúmen de incidencias reportados en ese intervalo de tiempo. Por ejemplo:

| Institución  | Area  | Lugar         |  Sintomático | COVID Positivo | COVID Negativo |
| -------------  | ------------- |:-------------:| -----:|  -----:|-----:|
| BrightCoders Academy | | Sala de Juntas|  1 | 3 |0 |
| BrightCoders Academy |  México | Aula 01 | 2 | 1 | 1|

- `Reporte de salud o incidencia` Permite al usuario registrar si es que manifiesta algunos síntomas o si es que ha recibido el resultado de alguna prueba. Puede haber más de un registro o reporte por día. Para respetar la privacidad, cuando se registra un reporte, se envía también al servidor los lugares en los que la persona estuvo en los últimos 10 días, pero la información solo sirve para incrementar el número de casos registrados en esos lugares y no para registrar los lugares en los que ha estado esa persona.
  - `Síntomas` En caso de querer registrar síntomas deberá señalar cuales de los siguiente síntomas manifiesta
    - Fiebre o escalofríos
    - Tos
    - Dolor en el pecho al respirar de manera profunda
    - Dificultad para respirar
    - Pérdida del olfato
    - Pérdida del gusto
    - Dolor de cabeza
    - Fatiga o cansancio
    - Dolores musculares y corporales
    - Irritación en la garganta
    - Diarrea
    - Conjuntivitis
    - Congestión o moqueo
    - Erupciones cutáneas
    - Pérdida del color en los dedos de las manos o de los pies
    - Náuseas o vómitos
  - `Prueba` En caso de querer reportar el resultado de una prueba deberá registrar
    - Fecha en que se realizó la prueba
    - Fecha en que le entregaron el resultado
    - Tipo de prueba
    - Resultado de la prueba
    - Si tenía o no síntomas el día de la prueba.

- `Registro de ingreso a un lugar` Mediante el uso de la cámara de su teléfono para la captura de un código QR, el usuario registra su presencia en un lugar.
