const palabras = {
    easy: [
        { palabra: 'HTML', pista: 'Lenguaje de marcado para estructuras web.' },
	  { palabra: 'CSS', pista: 'Lenguaje de estilos para páginas web.' },
        { palabra: 'JAVASCRIPT', pista: 'Lenguaje de programación para la web.' },
        { palabra: 'NVIDIA', pista:'Creadora de Tarjetas gráficas.'},
        { palabra: 'BYTE', pista: 'Unidad de información compuesta por 8 bits.' },
        { palabra: 'LAN', pista: 'Red de área local que conecta computadoras en un espacio reducido.' },
        { palabra: 'PING', pista: 'Herramienta para verificar la conexión entre dos dispositivos en una red.' },
        { palabra: 'CACHE', pista: 'Memoria que almacena datos temporales para acelerar el acceso.' },
        { palabra: 'CODEC', pista: 'Programa o dispositivo que codifica o decodifica señales digitales.' },
        { palabra: 'ICONO', pista: 'Pequeña imagen gráfica que representa un programa, archivo o función.' },
        { palabra: 'SHELL', pista: 'Interfaz que permite al usuario interactuar con el sistema operativo.' },
        { palabra: 'PIXEL', pista: 'La unidad más pequeña de una imagen digital en una pantalla.' },
        { palabra: 'NODE', pista: 'Un punto de conexión en una red que puede recibir, enviar o crear datos.' },
        { palabra: 'JAVA', pista: 'Lenguaje de programación orientado a objetos.' },
        { palabra: 'PHP', pista: 'Lenguaje de programación para el desarrollo web.' },
        { palabra: 'SQL', pista: 'Lenguaje de consulta estructurado para bases de datos.' },
        { palabra: 'IP', pista: 'Dirección que identifica un dispositivo en una red.' },
        { palabra: 'DNS', pista: 'Sistema que traduce nombres de dominio en direcciones IP.' },
        { palabra: 'URL', pista: 'Dirección de un recurso en la web.' },
        { palabra: 'HTTP', pista: 'Protocolo de transferencia de hipertexto.' },
        { palabra: 'HTTPS', pista: 'Versión segura de HTTP.' },
        { palabra: 'FTP', pista: 'Protocolo de transferencia de archivos.' },
        { palabra: 'SMTP', pista: 'Protocolo para el envío de correos electrónicos.' },
        { palabra: 'IMAP', pista: 'Protocolo para acceder a correos electrónicos en un servidor.' },
        { palabra: 'GIF', pista: 'Formato de imagen animada.' },
        { palabra: 'PNG', pista: 'Formato de imagen con transparencia.' },
        { palabra: 'JPEG', pista: 'Formato de imagen comprimida.' },
        { palabra: 'PDF', pista: 'Formato de documento portátil.' },
        { palabra: 'ZIP', pista: 'Formato de archivo comprimido.' },
        { palabra: 'RAR', pista: 'Formato de archivo comprimido.' },
        { palabra: 'EXE', pista: 'Extensión de archivo ejecutable.' },
        { palabra: 'DLL', pista: 'Biblioteca de enlaces dinámicos.' },
        { palabra: 'BIOS', pista: 'Sistema básico de entrada/salida de una computadora.' },
        { palabra: 'OS', pista: 'Sistema operativo.' },
        { palabra: 'UI', pista: 'Interfaz de usuario.' },
        { palabra: 'UX', pista: 'Experiencia de usuario.' },
        { palabra: 'AI', pista: 'Inteligencia artificial.' },
        { palabra: 'IOT', pista: 'Internet de las cosas.' },
        { palabra: 'XML', pista: 'Lenguaje de marcado extensible.' },
        { palabra: 'JSON', pista: 'Formato de intercambio de datos ligero.' },
        { palabra: 'API', pista: 'Interfaz de programación de aplicaciones.' },
        { palabra: 'VPN', pista: 'Red privada virtual.' },
        { palabra: 'SSH', pista: 'Protocolo para acceso seguro a servidores remotos.' },
        { palabra: 'GIT', pista: 'Sistema de control de versiones.' },
        { palabra: 'HUB', pista: 'Dispositivo que conecta múltiples computadoras en una red.' },
        { palabra: 'ROUTER', pista: 'Dispositivo que enruta el tráfico entre redes.' },
        { palabra: 'MODEM', pista: 'Dispositivo que convierte señales digitales en analógicas y viceversa.' },
        { palabra: 'FIREWALL', pista: 'Sistema de seguridad que controla el tráfico de red.' },
        { palabra: 'ANTIVIRUS', pista: 'Software que protege contra virus informáticos.' },
        { palabra: 'SPAM', pista: 'Correos electrónicos no deseados.' },
        { palabra: 'COOKIE', pista: 'Pequeño archivo que almacena datos de navegación.' },
        { palabra: 'CACHE', pista: 'Memoria temporal para acelerar el acceso a datos.' },
        { palabra: 'TOOLBAR', pista: 'Barra de herramientas en aplicaciones.' },
        { palabra: 'BOOT', pista: 'Proceso de inicio de una computadora.' },
        { palabra: 'RAM', pista: 'Memoria de acceso aleatorio utilizada por programas.' },
        { palabra: 'ROM', pista: 'Memoria de solo lectura, contiene datos esenciales para el arranque.' },
        { palabra: 'SSD', pista: 'Unidad de estado sólido para almacenamiento rápido.' },
        { palabra: 'HDD', pista: 'Unidad de disco duro para almacenamiento.' },
        { palabra: 'NAS', pista: 'Almacenamiento conectado en red.' },
        { palabra: 'RAID', pista: 'Matriz redundante de discos independientes.' },
        { palabra: 'ASCII', pista: 'Código estándar para representar caracteres.' },
        { palabra: 'BINARY', pista: 'Sistema numérico en base 2.' },
        { palabra: 'ALGORITHM', pista: 'Conjunto de pasos para resolver un problema.' },
        { palabra: 'DATA', pista: 'Información procesada por una computadora.' },
        { palabra: 'LATENCY', pista: 'Tiempo de retraso en la transmisión de datos.' },
        { palabra: 'DEBUG', pista: 'Proceso de encontrar y corregir errores en un programa.' },
        { palabra: 'BACKUP', pista: 'Copia de seguridad de datos.' },
        { palabra: 'MALWARE', pista: 'Software malicioso que daña o interfiere con una computadora.' },
        { palabra: 'PHISHING', pista: 'Intento fraudulento de obtener información confidencial.' },
        { palabra: 'ENCRYPTION', pista: 'Proceso de codificación de datos para proteger su privacidad.' },
        { palabra: 'DECRYPTION', pista: 'Proceso de descifrado de datos encriptados.' },
        { palabra: 'FIRMWARE', pista: 'Software integrado en un dispositivo de hardware.' },
        { palabra: 'PROXY', pista: 'Servidor que actúa como intermediario en una red.' },
        { palabra: 'TORRENT', pista: 'Protocolo para la descarga de archivos distribuidos.' },
        { palabra: 'CRYPTO', pista: 'Moneda digital basada en criptografía.' },
        { palabra: 'BLOCKCHAIN', pista: 'Cadena de bloques utilizada en la tecnología de criptomonedas.' },
        { palabra: 'CLOUD', pista: 'Almacenamiento y servicios en la nube.' },
        { palabra: 'VIRUS', pista: 'Programa malicioso que se propaga entre computadoras.' },
        { palabra: 'TROJAN', pista: 'Programa malicioso disfrazado de software legítimo.' },
        { palabra: 'ROOTKIT', pista: 'Software que oculta la presencia de malware en un sistema.' },
        { palabra: 'BOTNET', pista: 'Red de computadoras infectadas controladas remotamente.' },
        { palabra: 'DOS', pista: 'Ataque de denegación de servicio.' },
        { palabra: 'IPSEC', pista: 'Protocolo para asegurar comunicaciones en redes IP.' },
        { palabra: 'SSL', pista: 'Protocolo de seguridad para la transmisión de datos en la web.' },
        { palabra: 'TLS', pista: 'Sucesor de SSL para comunicaciones seguras.' },
        { palabra: 'MAC', pista: 'Dirección de control de acceso a medios en una red.' },
        { palabra: 'DHCP', pista: 'Protocolo para asignar dinámicamente direcciones IP.' },
        { palabra: 'NETBIOS', pista: 'Protocolo que permite la comunicación en redes.' },
        { palabra: 'ICMP', pista: 'Protocolo utilizado para enviar mensajes de error en redes.' },
        { palabra: 'ARP', pista: 'Protocolo para la resolución de direcciones IP a direcciones MAC.' },
        { palabra: 'SMB', pista: 'Protocolo para compartir archivos e impresoras en una red.' },


        // Agrega más palabras si es necesario
    ],
    medium: [
        { palabra: 'FRAMEWORK', pista: 'Conjunto de herramientas para desarrollo.' },
	   { palabra: 'API', pista: 'Interfaz para comunicación entre sistemas.' },
        { palabra: 'ALGORITMO', pista: 'Conjunto de instrucciones para resolver un problema.' },
        { palabra: 'COMPILADOR', pista: 'Programa que traduce código fuente a código máquina.' },
        { palabra: 'RECURSIVIDAD', pista: 'Función que se llama a sí misma.' },
        { palabra: 'VIRTUALIZACION', pista: 'Creación de una versión virtual de un recurso físico.' },
        { palabra: 'PROTOCOLO', pista: 'Conjunto de reglas que permiten la comunicación entre dispositivos.' },
        { palabra: 'FRAGMENTACION', pista: 'Proceso que divide archivos en partes no contiguas en un disco.' },
        { palabra: 'BUFFER', pista: 'Memoria temporal para almacenar datos durante su transferencia.' },
        { palabra: 'ENCRIPTACION', pista: 'Proceso de convertir datos en un código para proteger su privacidad.' },
        { palabra: 'MODULACION', pista: 'Proceso de modificar una señal para transmitir datos.' },
        { palabra: 'MULTITAREA', pista: 'Capacidad de un sistema para ejecutar varios procesos simultáneamente.' },
        { palabra: 'PARALELISMO', pista: 'Ejecución simultánea de varias operaciones.' },
        { palabra: 'RENDIMIENTO', pista: 'Capacidad de un sistema para ejecutar tareas eficientemente.' },
        { palabra: 'CONCURRENCIA', pista: 'Ejecución de varias operaciones en un periodo de tiempo solapado.' },
        { palabra: 'OPTIMIZACION', pista: 'Mejora del rendimiento de un sistema o proceso.' },
        { palabra: 'INTEGRIDAD', pista: 'Garantía de que los datos no han sido alterados.' },
        { palabra: 'CIFRADO', pista: 'Proceso de proteger información mediante la codificación.' },
        { palabra: 'DESERIALIZACION', pista: 'Proceso de convertir datos serializados en un objeto.' },
        { palabra: 'SUBNETEO', pista: 'División de una red en subredes más pequeñas.' },
        { palabra: 'VIRTUALIZACION', pista: 'Creación de recursos virtuales, como sistemas operativos o discos duros.' },
        { palabra: 'LATENCIA', pista: 'Retraso en la transmisión de datos.' },
        { palabra: 'FIRMWARE', pista: 'Software embebido en hardware.' },
        { palabra: 'EMULACION', pista: 'Imitación de un sistema por otro.' },
        { palabra: 'SOBRECARGA', pista: 'Capacidad de un sistema para manejar múltiples funciones con el mismo nombre.' },
        { palabra: 'POLIMORFISMO', pista: 'Capacidad de un objeto para tomar múltiples formas.' },
        { palabra: 'ABSTRACCION', pista: 'Proceso de ocultar detalles complejos y mostrar solo lo esencial.' },
        { palabra: 'ENCAPSULACION', pista: 'Agrupación de datos y métodos que operan sobre esos datos en una sola unidad.' },
        { palabra: 'HERENCIA', pista: 'Mecanismo para crear una nueva clase a partir de una existente.' },
        { palabra: 'ARCHIVOS', pista: 'Estructura que permite almacenar y organizar datos en un sistema.' },
        { palabra: 'VERSIONADO', pista: 'Manejo de múltiples versiones de un sistema o archivo.' },
        { palabra: 'REPLICA', pista: 'Copia exacta de datos en un sistema para asegurar la disponibilidad.' },
        { palabra: 'CONSISTENCIA', pista: 'Propiedad de un sistema donde los datos están correctos y actualizados.' },
        { palabra: 'CACHEO', pista: 'Almacenamiento temporal de datos para mejorar el rendimiento.' },
        { palabra: 'TOLERANCIA', pista: 'Capacidad de un sistema para continuar operando en caso de fallo.' },
        { palabra: 'CONMUTACION', pista: 'Cambio entre diferentes procesos o tareas en un sistema.' },
        { palabra: 'RASTREO', pista: 'Proceso de seguimiento y registro de actividades en un sistema.' },
        { palabra: 'COMPRESION', pista: 'Reducción del tamaño de un archivo o conjunto de datos.' },
        { palabra: 'ESCALABILIDAD', pista: 'Capacidad de un sistema para manejar crecimiento.' },
        { palabra: 'RESOLUCION', pista: 'Número de píxeles en una imagen o pantalla.' },
        { palabra: 'SEGMENTACION', pista: 'División de la memoria en partes lógicas.' },
        { palabra: 'CONGESTION', pista: 'Situación en la que la red se encuentra sobrecargada.' },
        { palabra: 'REDUNDANCIA', pista: 'Duplicación de componentes o funciones en un sistema para asegurar la fiabilidad.' },
        { palabra: 'FRAGMENTO', pista: 'Parte de un archivo que ha sido dividido para almacenamiento.' },
        { palabra: 'MULTICAST', pista: 'Envío de datos a múltiples destinatarios simultáneamente.' },
        { palabra: 'BROADCAST', pista: 'Envío de datos a todos los dispositivos de una red.' },
        { palabra: 'HARDWARE', pista: 'Componentes físicos de una computadora.' },
        { palabra: 'MICROPROCESADOR', pista: 'Unidad de procesamiento central en una computadora.' },
        { palabra: 'ALMACENAMIENTO', pista: 'Proceso de guardar datos para su uso futuro.' },
        { palabra: 'CONTENEDOR', pista: 'Unidad de software que agrupa aplicaciones y sus dependencias.' },
        { palabra: 'SINCRONIZACION', pista: 'Coordinación temporal entre procesos o sistemas.' },
        { palabra: 'MIGRACION', pista: 'Proceso de mover datos o sistemas de un entorno a otro.' },
        { palabra: 'PARADIGMA', pista: 'Modelo o patrón utilizado para estructurar sistemas o programas.' },
        { palabra: 'MORFOLOGIA', pista: 'Estudio de la estructura y forma de los datos.' },
        { palabra: 'HASH', pista: 'Función que convierte datos en una cadena de longitud fija.' },
        { palabra: 'RUTA', pista: 'Dirección o camino hacia un archivo o recurso en un sistema.' },
        { palabra: 'TERMINAL', pista: 'Interfaz de línea de comandos para interactuar con un sistema.' },
        { palabra: 'SINCRONIA', pista: 'Ejecución coordinada de procesos en el mismo tiempo.' },
        { palabra: 'HEURISTICA', pista: 'Método de resolución de problemas basado en la experiencia y aproximaciones.' },
        { palabra: 'ALOCACION', pista: 'Asignación de recursos en un sistema.' },
        { palabra: 'PERSISTENCIA', pista: 'Capacidad de los datos para sobrevivir después de que un proceso termine.' },
        { palabra: 'VINCULACION', pista: 'Proceso de enlazar una función o variable a un contexto específico.' },
        { palabra: 'SUBSISTEMA', pista: 'Sistema que es parte de un sistema más grande.' },
        { palabra: 'PRIORIDAD', pista: 'Orden en el que se ejecutan las tareas en un sistema.' },
        { palabra: 'ESCANEO', pista: 'Proceso de analizar datos o sistemas en busca de información específica.' },
        { palabra: 'ANTIVIRUS', pista: 'Software diseñado para detectar y eliminar virus informáticos.' },
        { palabra: 'TOKEN', pista: 'Unidad de seguridad utilizada para acceder a sistemas o recursos.' },
        { palabra: 'BALANCEO', pista: 'Distribución de la carga de trabajo entre múltiples recursos.' },
        { palabra: 'PREPROCESADOR', pista: 'Herramienta que realiza transformaciones en el código antes de la compilación.' },
        { palabra: 'DIRECCIONAMIENTO', pista: 'Asignación de direcciones para acceder a recursos en un sistema.' },
        { palabra: 'CLUSTER', pista: 'Conjunto de servidores que trabajan juntos como un solo sistema.' },
        { palabra: 'BIBLIOTECA', pista: 'Colección de funciones o recursos reutilizables en un programa.' },
        { palabra: 'INTERPRETE', pista: 'Programa que ejecuta código sin necesidad de compilarlo.' },
        { palabra: 'ENLACE', pista: 'Asociación entre dos recursos o elementos en un sistema.' },
        { palabra: 'COHERENCIA', pista: 'Estado en el que los datos son consistentes en diferentes partes de un sistema.' },
        { palabra: 'FALLBACK', pista: 'Método alternativo para asegurar la continuidad del servicio en caso de fallo.' },
        { palabra: 'MONTURA', pista: 'Proceso de hacer accesible un sistema de archivos.' },
        { palabra: 'PIPLINE', pista: 'Conjunto de procesos que se ejecutan en secuencia para completar una tarea.' },
        { palabra: 'DEPURACION', pista: 'Proceso de encontrar y corregir errores en un programa.' },
        { palabra: 'AUDITORIA', pista: 'Proceso de revisión y evaluación de sistemas o datos.' },
        { palabra: 'ANALIZADOR', pista: 'Herramienta o proceso para interpretar y procesar datos.' }


        // Agrega más palabras si es necesario
    ],
    hard: [
        { palabra: 'POLIFORMISMO', pista: 'Capacidad de un objeto para adoptar diferentes formas.' },
	   { palabra: 'ENCAPSULAMIENTO', pista: 'Ocultamiento de datos y métodos en una clase.' },
        { palabra: 'HERENCIA', pista: 'Mecanismo que permite a una clase heredar atributos y métodos de otra.' },
        { palabra: 'CRIPTOMONEDA', pista: 'Moneda digital que utiliza criptografía para asegurar transacciones.' },
        { palabra: 'CRYPTOGRAFIA', pista: 'Técnica de protección de datos mediante cifrado avanzado.' },
        { palabra: 'HIPERVISOR', pista: 'Software que permite ejecutar múltiples sistemas operativos en una máquina.' },
        { palabra: 'ESTEGANOGRAFIA', pista: 'Ocultación de información dentro de archivos u otros datos.' },
        { palabra: 'MICROKERNEL', pista: 'Núcleo de un sistema operativo con funciones mínimas.' },
        { palabra: 'BIOINFORMATICA', pista: 'Aplicación de técnicas computacionales al análisis de datos biológicos.' },
        { palabra: 'RANSOMWARE', pista: 'Tipo de malware que secuestra datos hasta que se pague un rescate.' },
        { palabra: 'VIRTUALIZACION', pista: 'Creación de versiones virtuales de recursos físicos como servidores o almacenamiento.' },
        { palabra: 'NEURONAL', pista: 'Relativo a las redes neuronales, un modelo de inteligencia artificial.' },
        { palabra: 'METAHEURISTICA', pista: 'Algoritmos avanzados para resolver problemas de optimización complejos.' },
        { palabra: 'INMUTABILIDAD', pista: 'Característica de un dato que no puede ser modificado una vez creado.' },
        { palabra: 'CONCURRENCIA', pista: 'Capacidad de un sistema para ejecutar varias tareas al mismo tiempo.' },
        { palabra: 'SINCRONIZACION', pista: 'Proceso de alinear la ejecución de diferentes partes de un sistema.' },
        { palabra: 'POLIMORFISMO', pista: 'Capacidad de un objeto para tomar múltiples formas en programación orientada a objetos.' },
        { palabra: 'ALGORITMO', pista: 'Conjunto de reglas para resolver problemas o realizar tareas.' },
        { palabra: 'CIBERSEGURIDAD', pista: 'Protección de sistemas y redes contra ataques digitales.' },
        { palabra: 'ESCALABILIDAD', pista: 'Capacidad de un sistema para crecer y adaptarse a mayores demandas.' },
        { palabra: 'SINCRONIA', pista: 'Ejecución simultánea de eventos en un sistema.' },
        { palabra: 'CIFRADO', pista: 'Proceso de convertir información en un código secreto para proteger su contenido.' },
        { palabra: 'COMPILACION', pista: 'Proceso de traducir código fuente a un lenguaje de máquina.' },
        { palabra: 'ACOPLAMIENTO', pista: 'Medida de la interdependencia entre componentes en un sistema.' },
        { palabra: 'RESILIENCIA', pista: 'Capacidad de un sistema para resistir fallos y recuperarse rápidamente.' },
        { palabra: 'DESERIALIZACION', pista: 'Proceso de convertir datos serializados en un objeto usable.' },
        { palabra: 'VULNERABILIDAD', pista: 'Debilidad en un sistema que puede ser explotada por atacantes.' },
        { palabra: 'MACHINELEARNING', pista: 'Campo de la inteligencia artificial que permite a las máquinas aprender de datos.' },
        { palabra: 'MICROSERVICIOS', pista: 'Arquitectura que divide una aplicación en servicios pequeños y manejables.' },
        { palabra: 'DESFRAGMENTACION', pista: 'Proceso de reorganización de datos fragmentados en un disco.' },
        { palabra: 'AUTENTICACION', pista: 'Proceso de verificar la identidad de un usuario o sistema.' },
        { palabra: 'ORCHESTRATION', pista: 'Automatización de la gestión y coordinación de sistemas y servicios.' },
        { palabra: 'LEAKAGE', pista: 'Pérdida de datos no deseada, generalmente en un contexto de memoria.' },
        { palabra: 'CONSISTENCIA', pista: 'Propiedad de un sistema donde todos los componentes están en un estado coherente.' },
        { palabra: 'FUNCIONALIDAD', pista: 'Conjunto de capacidades que ofrece un sistema o software.' },
        { palabra: 'ESCALADO', pista: 'Aumento de la capacidad de un sistema para manejar más carga.' },
        { palabra: 'HARDENING', pista: 'Proceso de proteger un sistema eliminando vulnerabilidades.' },
        { palabra: 'LATENCIA', pista: 'Retraso en la transferencia de datos a través de una red.' },
        { palabra: 'INTEGRIDAD', pista: 'Aseguramiento de que los datos no han sido alterados durante la transmisión.' },
        { palabra: 'MULTITAREA', pista: 'Capacidad de un sistema para ejecutar varios procesos al mismo tiempo.' },
        { palabra: 'ANONIMIZACION', pista: 'Proceso de remover información que pueda identificar a un individuo.' },
        { palabra: 'ALGORITMIA', pista: 'Estudio y diseño de algoritmos eficientes.' },
        { palabra: 'CUANTIFICACION', pista: 'Proceso de asignar valores numéricos a variables cualitativas.' },
        { palabra: 'DESNORMALIZACION', pista: 'Proceso de introducir redundancia en una base de datos para mejorar el rendimiento.' },
        { palabra: 'INTERFEROMETRO', pista: 'Dispositivo que mide la interferencia de ondas, usado en sistemas avanzados.' },
        { palabra: 'TRANSISTOR', pista: 'Componente electrónico que actúa como un interruptor o amplificador.' },
        { palabra: 'VIRTUALIZACION', pista: 'Creación de versiones virtuales de recursos físicos como servidores o almacenamiento.' },
        { palabra: 'ORACLE', pista: 'Base de datos ampliamente utilizada en grandes empresas.' },
        { palabra: 'NEURALNETWORK', pista: 'Modelo de inteligencia artificial basado en la estructura del cerebro humano.' },
        { palabra: 'PRIORIZACION', pista: 'Asignación de importancia o urgencia a tareas o procesos.' },
        { palabra: 'ORCHESTRATION', pista: 'Automatización de la gestión y coordinación de sistemas y servicios.' },
        { palabra: 'ANALITICA', pista: 'Proceso de analizar datos para obtener información valiosa.' },
        { palabra: 'CONSISTENCIA', pista: 'Propiedad de un sistema donde todos los componentes están en un estado coherente.' },
        { palabra: 'ESCALADO', pista: 'Aumento de la capacidad de un sistema para manejar más carga.' },
        { palabra: 'PERSISTENCIA', pista: 'Capacidad de los datos o los objetos de programación de sobrevivir al ciclo de vida del programa.' },
        { palabra: 'OPTIMIZACION', pista: 'Proceso de hacer un sistema o algoritmo más eficiente.' },
        { palabra: 'FUNCIONHASH', pista: 'Método para crear identificadores únicos a partir de datos.' },
        { palabra: 'ENTROPIA', pista: 'Medida de incertidumbre o desorden en un sistema, usada en criptografía.' },
        { palabra: 'INGENIERIA', pista: 'Aplicación de principios científicos para diseñar y construir sistemas o productos.' }


        // Agrega más palabras si es necesario
    ]
};


let palabraObjetivo = '';
let palabraActual = [];
let intentos = 0;
const maxIntentosOriginal = 6;
const gridElement = document.getElementById('grid');
const keyboardElement = document.getElementById('keyboard');
const messageElement = document.getElementById('message');
const dificultadElement = document.getElementById('difficulty');
const restartButton = document.getElementById('restartButton');
const hintButton = document.getElementById('hintButton');
const hintText = document.getElementById('hintText');
const pistas = {};
let tecladoKeys = {}; // Para almacenar referencias a las teclas del teclado virtual
let pistaUsada = false; // Variable para verificar si la pista ha sido usada


/**
 * Función para seleccionar una palabra al azar según la dificultad.
 */
function seleccionarPalabra(dificultad) {
    const palabrasNivel = palabras[dificultad];
    const randomIndex = Math.floor(Math.random() * palabrasNivel.length);
    const palabra = palabrasNivel[randomIndex];
    palabraObjetivo = palabra.palabra;
    pistas.pista = palabra.pista;
}


/**
 * Función para crear la cuadrícula del juego.
 */
function crearCuadricula(palabra) {
    gridElement.innerHTML = '';
    const longitud = palabra.length;
    gridElement.style.gridTemplateRows = `repeat(${maxIntentosOriginal}, 50px)`; // Ajustar la cantidad de filas
    gridElement.style.gridTemplateColumns = `repeat(${longitud}, 50px)`; // Configura las columnas basadas en la longitud de la palabra
    for (let i = 0; i < maxIntentosOriginal; i++) {
        for (let j = 0; j < longitud; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            gridElement.appendChild(cell);
        }
    }
}


/**
 * Función para manejar la entrada del teclado físico.
 */
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (key === 'ENTER') {
        verificarPalabra();
        event.preventDefault(); // Evitar que el ENTER active el botón
    } else if (key === 'BACKSPACE') {
        palabraActual.pop();
        actualizarCuadricula();
    } else if (key.match(/^[A-Z]$/)) {
        manejarTecla(key);
    }
});


/**
 * Función para crear el teclado virtual.
 */
function crearTeclado() {
    const filas = [
        'QWERTYUIOP',
        'ASDFGHJKL',
        'ZXCVBNM'
    ];


    keyboardElement.innerHTML = '';


    tecladoKeys = {}; // Reiniciar las teclas del teclado virtual


    // Crear filas de letras
    filas.forEach(fila => {
        const row = document.createElement('div');
        row.className = 'key-row';
        fila.split('').forEach(letra => {
            const key = document.createElement('div');
            key.className = 'key';
            key.textContent = letra;
            key.addEventListener('click', () => manejarTecla(letra));
            row.appendChild(key);


            // Almacenar referencia a la tecla
            tecladoKeys[letra] = key;
        });
        keyboardElement.appendChild(row);
    });


    // Crear fila adicional para 'Enter' y 'Backspace'
    const specialRow = document.createElement('div');
    specialRow.className = 'key-row';


    // Agregar la tecla 'Enter'
    const enterKey = document.createElement('div');
    enterKey.className = 'key key-special';
    enterKey.textContent = 'Enter';
    enterKey.addEventListener('click', () => verificarPalabra());
    specialRow.appendChild(enterKey);


    // Agregar la tecla 'Backspace'
    const backspaceKey = document.createElement('div');
    backspaceKey.className = 'key key-special';
    backspaceKey.textContent = 'Backspace';
    backspaceKey.addEventListener('click', () => {
        palabraActual.pop();
        actualizarCuadricula();
    });
    specialRow.appendChild(backspaceKey);


    // Agregar la fila de teclas especiales al teclado
    keyboardElement.appendChild(specialRow);
}


/**
 * Función para manejar las teclas del teclado virtual.
 */
function manejarTecla(letra) {
    if (intentos < maxIntentosOriginal) {
        if (palabraActual.length < palabraObjetivo.length) {
            palabraActual.push(letra);
            actualizarCuadricula();
        }
    }
}


/**
 * Función para aplicar animación y removerla después de un tiempo.
 */
function aplicarAnimacion(elemento, animacion, duracion) {
    elemento.classList.remove(animacion); // Remover animación si ya está aplicada
    void elemento.offsetWidth; // Forzar el reflujo para reiniciar la animación
    elemento.classList.add(animacion);
    setTimeout(() => {
        elemento.classList.remove(animacion);
    }, duracion);
}


/**
 * Función para actualizar la cuadrícula.
 */
function actualizarCuadricula() {
    const celdas = document.querySelectorAll('.grid-cell');
    const longitud = palabraObjetivo.length;
    let index = intentos * longitud;
    for (let i = 0; i < longitud; i++) {
        const celda = celdas[index + i];
        celda.textContent = palabraActual[i] || '';
        // Aplicar animación solo si la celda tiene una letra
        if (palabraActual[i]) {
            aplicarAnimacion(celda, 'zoomIn', 500); // Cambiado a zoomIn
        }
    }
}


/**
 * Función para verificar la palabra y aplicar colores.
 */
function verificarPalabra() {
    const celdas = document.querySelectorAll('.grid-cell');
    const palabra = palabraActual.join('');
    if (palabra.length === palabraObjetivo.length) {
        // Desactivar teclas no utilizadas
        const letrasPalabraObjetivo = new Set(palabraObjetivo); // Usar un Set para verificar las letras presentes
        Object.keys(tecladoKeys).forEach(letra => {
            if (!letrasPalabraObjetivo.has(letra) && palabra.includes(letra)) {
                tecladoKeys[letra].classList.add('key-disabled'); // Aplicar clase para desactivar la tecla
            }
        });


        for (let i = 0; i < palabra.length; i++) {
            const letra = palabra[i];
            const celda = celdas[intentos * palabra.length + i];
            const tecla = tecladoKeys[letra]; // Obtiene la tecla del teclado virtual


            if (palabraObjetivo[i] === letra) {
                celda.classList.add('correct');
                tecla.classList.remove('present'); // Remueve 'present' si ya lo tiene
                tecla.classList.add('correct'); // Pinta de verde la tecla
                if (dificultadElement.value === 'hard') {
                    celda.classList.add('fire'); // Añadir animación de fuego en dificultad difícil
                }
            } else if (palabraObjetivo.includes(letra)) {
                celda.classList.add('present');
                if (!tecla.classList.contains('correct')) {
                    tecla.classList.add('present'); // Pinta de amarillo si no está en la posición correcta
                }
            } else {
                celda.classList.add('absent');
                tecla.classList.add('absent'); // Pinta de gris la tecla
            }
           
            // Aplicar animación solo si la celda tiene una letra
            if (palabra[i]) {
                aplicarAnimacion(celda, 'pulse', 1000); // Cambiado a pulse
            }
        }


        if (palabra === palabraObjetivo) {
            mostrarMensaje('¡Ganaste!');
        } else {
            intentos++;
            palabraActual = [];
            if (intentos >= maxIntentosOriginal) {
                mostrarMensaje(`Perdiste. La palabra era "${palabraObjetivo}".`);
                hintButton.style.display = 'none'; // Ocultar botón de pista
            } else {
                moverSiguienteFila(); // Mueve a la siguiente fila si no es el último intento
            }
        }
    }
}


/**
 * Función para mover a la siguiente fila y marcar las vidas perdidas.
 */
function moverSiguienteFila() {
    const celdas = document.querySelectorAll('.grid-cell');
    const longitud = palabraObjetivo.length;
    for (let i = 0; i < longitud; i++) {
        const celda = celdas[intentos * longitud + i];
        if (!celda.textContent) {
            celda.textContent = '_'; // Indicador de posición vacía (opcional)
        }
    }


    // Marca la fila actual con color gris y cruces para vidas perdidas
    const filas = Array.from(gridElement.children);
    filas.slice(intentos * longitud, (intentos + 1) * longitud).forEach(celda => {
        celda.classList.add('lost-life'); // Agregar clase para vida perdida
    });
}


/**
 * Función para mostrar un mensaje en la página.
 */
function mostrarMensaje(mensaje) {
    messageElement.textContent = mensaje;
    messageElement.style.opacity = 1;
}


/**
 * Función para reiniciar el juego.
 */
function reiniciarJuego() {
    intentos = 0;
    palabraActual = [];
    pistaUsada = false; // Reiniciar el estado de la pista
    const dificultad = dificultadElement.value;
    seleccionarPalabra(dificultad);
    crearCuadricula(palabraObjetivo);
    actualizarCuadricula();
    messageElement.textContent = '';
    messageElement.style.opacity = 0;
    hintButton.style.display = 'inline-block'; // Mostrar el botón de pista
    hintText.textContent = ''; // Limpiar el texto de la pista
   
    // Reiniciar el teclado virtual
    crearTeclado(); // Asegura que el teclado se cree y se reinicie
}


/**
 * Función para mostrar la pista.
 */
function mostrarPista() {
    if (!pistaUsada) {
        if (intentos < maxIntentosOriginal - 1) { // Solo se puede usar la pista si hay intentos disponibles
            hintText.textContent = pistas.pista;
            pistaUsada = true;
            intentos++; // Reducir un intento al usar la pista
            moverSiguienteFila(); // Mover a la siguiente fila
        } else {
            hintText.textContent = 'No puedes usar la pista, ya no tienes intentos disponibles.';
        }
    }
}


// Inicializar el juego
document.addEventListener('DOMContentLoaded', () => {
    dificultadElement.addEventListener('change', reiniciarJuego);
    restartButton.addEventListener('click', reiniciarJuego);
    hintButton.addEventListener('click', mostrarPista);
    crearTeclado();
    reiniciarJuego();
});
