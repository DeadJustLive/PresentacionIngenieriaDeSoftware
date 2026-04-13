# 📊 Estructura de Presentación - Sistema de Control Fronterizo
**Tiempo total asignado:** 10 Minutos  
**Oradores:** 3 (Aprox. 3 minutos y 20 segundos por persona)  
**Estrategia:** Bloques continuos para mantener fluidez y evitar el desgaste de "pasarse la palabra" en cada slide. La presentación se navega de forma lineal con las flechas, dejando el Hub interactivo para la sección final de respuestas.

---

## 👥 Roles Sugeridos
* **Orador 1 (El Gestor / Planificador):** Establece el problema real, fija las métricas del proyecto (presupuesto y tiempo detallados en tu Acta) y plantea cómo es el exoesqueleto de la solución (Arquitectura).
* **Orador 2 (El Ejecutor / Analista):** Conecta las bases técnicas con lo que debe hacer la plataforma (Requerimientos) y diagrama al milímetro cómo lo va a vivir la gente en la vida real (Usabilidad y Flujo).
* **Orador 3 (El Auditor / Valor):** Garantiza que todo esto no colapse (QA), mapea el beneficio directo a los organismos (Beneficiarios) y cierra con el impacto social/estatal de la propuesta.

---

## ⏱️ BLOQUE 1 - Orador 1: Fundamentos (Minutos 0:00 - 3:20)

* **Slide 1: Contexto e Identificación del Problema (60 seg)**
  * **Discurso:** Arranca directo al "dolor" principal. Evidencia los tiempos inaceptables de espera (de 8 a 20 horas en verano) y la desconexión total que hoy existe entre la Aduana, SAG, PDI y autoridades limítrofes.

* **Slide 2: Plan Maestro y Viabilidad (60 seg)**
  * **Discurso:** Conectando con los documentos base (*Acta Minuta Kick Off* y *Acta de Constitución*), declara que esto se construirá con un presupuesto cerrado de **30.000.000 CLP** en un plazo de maduración agresivo de **3 meses (12 semanas)**. Muestra que tienen el control de la gestión y no es solo una idea abstracta.

* **Slide 3: Arquitectura Inicial (80 seg)**
  * **Discurso:** Resume rápido las 3 capas: cliente (front), microservicios (interoperabilidad) y persistencia distribuida.
  * *Transición:* "Tener esta infraestructura es la única forma de que este sistema funcione y resista. Ahora, ¿qué reglas y pasos exáctos se ejecutan sobre ella? Para esto, los dejo con mi compañero/a [Nombre Orador 2]".

---

## ⏱️ BLOQUE 2 - Orador 2: El Producto y el Usuario (Minutos 3:20 - 6:40)

* **Slide 4: Requerimientos del Negocio (60 seg)**
  * **Discurso:** Extrae de tu *Planilla de Requisitos* el foco principal: NO leerás todos. Céntrate en el RF.8 (Plataforma única web/móvil del ciudadano) y la crucial integración del RF.3/RF.4 (Interoperabilidad en tiempo real de entes fronterizos). En No Funcionales, recalca lograr la disponibilidad inmediata para erradicar las filas.

* **Slide 5: Usabilidad Prototipo (60 seg)**
  * **Discurso:** Aterrizar lo anterior a pantallas. Menciona la "Pre-digitación" como delegación del trabajo y la "Reducción de carga cognitiva" (entregar solo datos limpios al funcionario en su ventanilla).

* **Slide 6: Flujo Operativo de Viaje (80 seg)**
  * **Discurso:** Recorrer paso a paso el gran viaje del ciudadano. Es tu historia de éxito: 1) Declara por app en casa -> 2) Escanea la patente/QR al llegar -> 3) El sistema interopera con SAG/PDI por detrás sin hacerle abrir 3 páginas al funcionario -> 4) Se otorga la luz verde digital en pocos minutos.
  * *Transición:* "Crear la app e integrar sistemas es útil, pero debe soportar miles de vehículos y un nivel estatal de responsabilidad. Los dejo con [Nombre Orador 3] para abordar la Calidad y los Beneficios a fondo".

---

## ⏱️ BLOQUE 3 - Orador 3: Aseguramiento e Impacto (Minutos 6:40 - 10:00)

* **Slide 7: Aseguramiento de Calidad [QA] (60 seg)**
  * **Discurso:** Da garantías de viabilidad. Explica brevemente la estrategia de CI/CD, monitorización de infraestructura y cifrado, para dejar claro que los datos públicos no sufrirán fugas, como exige la institución y las reglas no-funcionales.

* **Slide 8: Radiografía de Beneficiarios [Slider Iterativo] (80 seg)**
  * **Discurso:** Interactúa o pide que hagan el "cambio" (Switch) en esta slide. Muestra primero los dolores actuales de los entes fiscalizadores (SAG, PDI), agentes de aduana y de turismo, usando la vista inicial roja/oscura, y luego cómo la transparencia digital les facilita el control seguro y automático al hacer el "switch".

* **Slide 9 y 10: Visión de Impacto y Cierre (60 seg)**
  * **Discurso:** Resume visualizando el retorno de inversión y el alivio para el estrés ciudadano. Al llegar a la diapositiva final, termina la presentación agradeciendo.
  * **Táctica de cierre:** Al terminar, aprieten la tecla `Escape` o el botón de cuadritos superior derecho. La pantalla estallará hacia el *Hub de Navegación*. Quédense ahí durante las preguntas del público/evaluador.

---

## 🆘 Manejo de Preguntas (El as bajo la manga / Anexos)
Como están en el "Hub de navegación", tendrán acceso directo a sus 4 anexos técnicos al final si la comisión los empieza a cuestionar severamente:

* **Si un profesor duda de si podrán hacerlo en 3 meses:** Abran o diríjanse al **"Anexo: Cronograma Fases"** o al **"Anexo: Cronograma Hitos"** (que acabamos de agregar). Muestren cómo el equipo definió sprints y desviación del 10%. Y si buscan detalle micro, abran su **Carta Gantt**.
* **Si preguntan de las tareas concretas de ustedes:** Naveguen al **"Anexo: EDT"** para mostrar el desglose analítico de los paquetes de trabajo técnico.
