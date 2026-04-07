const DATA = {
  subjects: [
    // =====================================================================
    // 1. LENGUA CASTELLANA
    // =====================================================================
    {
      id: 'lengua',
      name: 'Lengua Castellana',
      icon: '📖',
      color: '--c-lengua',
      sections: [
        {
          id: 'lengua-tipos',
          title: 'Tipos de texto',
          content: `
<h4>Textos literarios</h4>
<p>Son textos cuyo objetivo principal es producir placer est&eacute;tico mediante el uso creativo del lenguaje. Se clasifican en:</p>
<ul>
  <li><span class="highlight">Narrativo:</span> cuenta una historia con narrador, personajes, espacio y tiempo. Ejemplos: cuento, novela, f&aacute;bula, mito, leyenda.</li>
  <li><span class="highlight">L&iacute;rico:</span> expresa sentimientos y emociones del hablante l&iacute;rico. Usa verso, rima y figuras literarias. Ejemplos: poema, oda, soneto.</li>
  <li><span class="highlight">Dram&aacute;tico:</span> est&aacute; escrito para ser representado. Se estructura en actos y escenas con di&aacute;logos y acotaciones. Ejemplos: tragedia, comedia, drama.</li>
</ul>

<h4>Textos no literarios</h4>
<p>Su prop&oacute;sito es informar, persuadir o instruir. Tipos principales:</p>
<ul>
  <li><span class="highlight">Argumentativo:</span> defiende una postura con razones. Incluye editorial, columna de opini&oacute;n, carta al director, ensayo.</li>
  <li><span class="highlight">Informativo / Expositivo:</span> entrega datos objetivos. Incluye noticia, informe, art&iacute;culo cient&iacute;fico.</li>
  <li><span class="highlight">Publicitario:</span> busca persuadir para comprar o actuar. Incluye afiche, aviso, propaganda.</li>
  <li><span class="highlight">Instructivo:</span> indica c&oacute;mo hacer algo. Incluye receta, manual, instrucciones de uso.</li>
</ul>

<div class="key-concept">
  <strong>Clave:</strong> para identificar el tipo de texto, preg&uacute;ntate: &iquest;cu&aacute;l es su prop&oacute;sito principal? &iquest;Entretener, informar, persuadir o instruir?
</div>`
        },
        {
          id: 'lengua-argumentativo',
          title: 'Texto argumentativo',
          content: `
<h4>Estructura del texto argumentativo</h4>
<ul>
  <li><span class="highlight">Tesis:</span> idea central que el autor defiende.</li>
  <li><span class="highlight">Argumentos:</span> razones que respaldan la tesis.</li>
  <li><span class="highlight">Contraargumentos:</span> posiciones contrarias que el autor reconoce.</li>
  <li><span class="highlight">Refutaci&oacute;n:</span> respuesta del autor al contraargumento, demostrando por qu&eacute; la tesis sigue siendo v&aacute;lida.</li>
  <li><span class="highlight">Conclusi&oacute;n:</span> cierre que reafirma la tesis.</li>
</ul>

<h4>Tipos de argumentos</h4>
<table>
  <tr><th>Tipo</th><th>Descripci&oacute;n</th><th>Ejemplo</th></tr>
  <tr><td>De autoridad</td><td>Cita a un experto o instituci&oacute;n reconocida</td><td>&laquo;Seg&uacute;n la OMS...&raquo;</td></tr>
  <tr><td>Causa-efecto</td><td>Muestra que una cosa produce la otra</td><td>&laquo;El tabaco causa c&aacute;ncer, por eso debe prohibirse...&raquo;</td></tr>
  <tr><td>Por ejemplo</td><td>Usa un caso concreto para probar la tesis</td><td>&laquo;En Finlandia, donde se invirti&oacute; en educaci&oacute;n...&raquo;</td></tr>
  <tr><td>Datos / estad&iacute;sticas</td><td>Cifras y porcentajes verificables</td><td>&laquo;El 78% de los encuestados...&raquo;</td></tr>
  <tr><td>Analog&iacute;a</td><td>Compara situaciones similares</td><td>&laquo;As&iacute; como un edificio necesita cimientos...&raquo;</td></tr>
  <tr><td>Experiencia personal</td><td>Testimonio vivido del autor</td><td>&laquo;En mi experiencia como profesor...&raquo;</td></tr>
</table>

<div class="key-concept">
  <strong>Clave:</strong> la tesis suele aparecer al inicio o al final del texto. B&uacute;scala en la primera o &uacute;ltima oraci&oacute;n de esos p&aacute;rrafos.
</div>`
        },
        {
          id: 'lengua-hecho-opinion',
          title: 'Hecho vs. opini\u00f3n',
          content: `
<h4>Hecho</h4>
<p>Es una afirmaci&oacute;n <span class="highlight">verificable y objetiva</span>. Se puede comprobar con datos, mediciones o fuentes confiables.</p>
<p>Ejemplo: &laquo;Chile tiene una poblaci&oacute;n de aproximadamente 19 millones de habitantes.&raquo;</p>

<h4>Opini&oacute;n</h4>
<p>Es una afirmaci&oacute;n <span class="highlight">subjetiva</span>, basada en creencias, valores o juicios personales. No se puede verificar universalmente.</p>
<p>Ejemplo: &laquo;Chile es el mejor pa&iacute;s de Sudam&eacute;rica para vivir.&raquo;</p>

<h4>Palabras clave para identificar opiniones</h4>
<ul>
  <li>Verbos de juicio: <em>creo, pienso, opino, considero, me parece</em></li>
  <li>Adjetivos valorativos: <em>mejor, peor, excelente, terrible, hermoso, horrible</em></li>
  <li>Expresiones modales: <em>deber&iacute;a, ser&iacute;a conveniente, es necesario que</em></li>
  <li>Adverbios de duda o valoraci&oacute;n: <em>quiz&aacute;s, probablemente, lamentablemente, afortunadamente</em></li>
</ul>

<div class="key-concept">
  <strong>Truco:</strong> si puedes comprobar la afirmaci&oacute;n buscando en una fuente oficial, es un hecho. Si depende de qui&eacute;n lo diga, es una opini&oacute;n.
</div>`
        },
        {
          id: 'lengua-recursos',
          title: 'Recursos verbales y no verbales',
          content: `
<h4>Recursos verbales</h4>
<p>Son los elementos del lenguaje escrito que ayudan a organizar y destacar informaci&oacute;n:</p>
<ul>
  <li><span class="highlight">T&iacute;tulo y subt&iacute;tulos:</span> organizan jer&aacute;rquicamente el contenido.</li>
  <li><span class="highlight">Negrita:</span> destaca t&eacute;rminos o ideas clave.</li>
  <li><span class="highlight">Cursiva:</span> se&ntilde;ala t&eacute;rminos extranjeros, t&iacute;tulos de obras o &eacute;nfasis.</li>
  <li><span class="highlight">Comillas:</span> citas textuales o uso ir&oacute;nico de palabras.</li>
  <li><span class="highlight">Vi&ntilde;etas y numeraci&oacute;n:</span> organizan listas o pasos.</li>
</ul>

<h4>Recursos no verbales</h4>
<p>Son elementos visuales que complementan o refuerzan el mensaje:</p>
<ul>
  <li><span class="highlight">Im&aacute;genes y fotograf&iacute;as:</span> ilustran o generan impacto emocional.</li>
  <li><span class="highlight">Gr&aacute;ficos y tablas:</span> presentan datos de forma visual y comparativa.</li>
  <li><span class="highlight">Color:</span> atrae la atenci&oacute;n, genera emociones, diferencia secciones.</li>
  <li><span class="highlight">&Iacute;conos y s&iacute;mbolos:</span> transmiten significado r&aacute;pido (se&ntilde;ales de tr&aacute;nsito, emojis).</li>
  <li><span class="highlight">Tipograf&iacute;a y tama&ntilde;o de letra:</span> jerarquizan la informaci&oacute;n.</li>
</ul>

<div class="key-concept">
  <strong>En la prueba:</strong> cuando te pregunten por la funci&oacute;n de un recurso, piensa en <em>para qu&eacute; sirve</em> en ese contexto espec&iacute;fico, no solo qu&eacute; es.
</div>`
        },
        {
          id: 'lengua-vocabulario',
          title: 'Vocabulario en contexto',
          content: `
<h4>Estrategias para deducir significados</h4>
<p>Cuando encuentras una palabra desconocida en un texto, usa estas estrategias:</p>
<ul>
  <li><span class="highlight">Sin&oacute;nimos:</span> busca si el texto ofrece una palabra equivalente cercana. &laquo;Era un hombre <em>taciturno</em>, callado y reservado.&raquo;</li>
  <li><span class="highlight">Ant&oacute;nimos:</span> a veces el texto presenta el contraste. &laquo;No era <em>generoso</em>, sino m&aacute;s bien avaro.&raquo;</li>
  <li><span class="highlight">Definici&oacute;n en el texto:</span> el autor explica directamente. &laquo;La <em>fotosíntesis</em>, es decir, el proceso por el cual las plantas producen su alimento...&raquo;</li>
  <li><span class="highlight">Causa-efecto:</span> el contexto muestra la consecuencia. &laquo;La sequ&iacute;a fue tan <em>prolongada</em> que los r&iacute;os se secaron completamente.&raquo;</li>
  <li><span class="highlight">Ra&iacute;z, prefijo y sufijo:</span> descomponer la palabra. <em>In-</em> (no) + <em>mortal</em> = que no muere.</li>
</ul>

<div class="key-concept">
  <strong>M&eacute;todo:</strong> reemplaza la palabra desconocida por cada opci&oacute;n y relee la oraci&oacute;n. La que mantenga el sentido original es la correcta.
</div>`
        },
        {
          id: 'lengua-personajes',
          title: 'An\u00e1lisis de personajes',
          content: `
<h4>Dimensiones de un personaje</h4>
<table>
  <tr><th>Aspecto</th><th>Qu&eacute; observar</th><th>Ejemplo</th></tr>
  <tr><td><span class="highlight">F&iacute;sico</span></td><td>Apariencia, edad, vestimenta, rasgos corporales</td><td>&laquo;Era alta, de cabello oscuro y ojos profundos&raquo;</td></tr>
  <tr><td><span class="highlight">Psicol&oacute;gico</span></td><td>Personalidad, emociones, motivaciones, conflictos internos</td><td>&laquo;Solitaria y desconfiada, prefer&iacute;a la soledad&raquo;</td></tr>
  <tr><td><span class="highlight">Social</span></td><td>Clase social, profesi&oacute;n, relaciones, rol en la comunidad</td><td>&laquo;Era la profesora del pueblo, respetada por todos&raquo;</td></tr>
</table>

<h4>Tipos de personajes</h4>
<ul>
  <li><span class="highlight">Protagonista:</span> personaje central de la historia.</li>
  <li><span class="highlight">Antagonista:</span> se opone al protagonista.</li>
  <li><span class="highlight">Secundario:</span> acompa&ntilde;a o complementa al protagonista.</li>
  <li><span class="highlight">Incidental:</span> aparece brevemente, sin desarrollo profundo.</li>
</ul>

<h4>Caracterizaci&oacute;n</h4>
<ul>
  <li><span class="highlight">Directa:</span> el narrador o personaje describe expl&iacute;citamente. &laquo;Mar&iacute;a era generosa.&raquo;</li>
  <li><span class="highlight">Indirecta:</span> se infiere de las acciones, di&aacute;logos o reacciones. &laquo;Mar&iacute;a siempre compart&iacute;a su almuerzo con quien no ten&iacute;a.&raquo;</li>
</ul>

<div class="key-concept">
  <strong>En la prueba:</strong> cuando te pidan caracterizar un personaje, busca evidencia textual: qu&eacute; dice, qu&eacute; hace y c&oacute;mo reaccionan los dem&aacute;s ante &eacute;l.
</div>`
        }
      ],
      questions: [
        {
          id: 1,
          type: 'multiple',
          stimulus: '<p><em>&laquo;Mar&iacute;a caminaba por el sendero de tierra cuando escuch&oacute; un ruido entre los arbustos. Se detuvo, conteniendo la respiraci&oacute;n. Una sombra se movi&oacute; r&aacute;pidamente y desapareci&oacute; entre los &aacute;rboles. Su coraz&oacute;n lat&iacute;a con fuerza, pero sigui&oacute; adelante, apretando el pa&ntilde;uelo que su abuela le hab&iacute;a dado esa ma&ntilde;ana.&raquo;</em></p>',
          question: '\u00bfQu\u00e9 tipo de texto es el fragmento anterior?',
          options: ['Texto l\u00edrico', 'Texto narrativo', 'Texto argumentativo', 'Texto instructivo'],
          answer: 1,
          explanation: 'Es un texto narrativo porque cuenta una historia con narrador, personaje (Mar\u00eda), acciones en secuencia, y un espacio/tiempo definidos.'
        },
        {
          id: 2,
          type: 'multiple',
          stimulus: '<p><em>&laquo;El uso excesivo de pantallas en ni&ntilde;os menores de 6 a&ntilde;os genera da&ntilde;os irreversibles en su desarrollo cognitivo. Seg&uacute;n la Organizaci&oacute;n Mundial de la Salud, los ni&ntilde;os de esta edad no deber&iacute;an estar expuestos a pantallas m&aacute;s de una hora diaria. Por ello, es fundamental que los padres establezcan l&iacute;mites claros.&raquo;</em></p>',
          question: '\u00bfCu\u00e1l es la tesis del texto?',
          options: [
            'La OMS recomienda limitar las pantallas.',
            'Los padres deben establecer l\u00edmites claros.',
            'El uso excesivo de pantallas en ni\u00f1os menores de 6 a\u00f1os genera da\u00f1os irreversibles.',
            'Los ni\u00f1os no deben usar pantallas.'
          ],
          answer: 2,
          explanation: 'La tesis es la idea central que el autor defiende: que el uso excesivo de pantallas genera da\u00f1os irreversibles. Las dem\u00e1s son argumentos o conclusiones derivadas.'
        },
        {
          id: 3,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l de las siguientes afirmaciones es un HECHO?',
          options: [
            'El f\u00fatbol es el deporte m\u00e1s emocionante del mundo.',
            'Chile limita al norte con Per\u00fa.',
            'La mejor forma de aprender es leyendo.',
            'Creo que la educaci\u00f3n p\u00fablica deber\u00eda ser gratuita.'
          ],
          answer: 1,
          explanation: 'Chile limita al norte con Per\u00fa es un dato geogr\u00e1fico verificable. Las dem\u00e1s contienen juicios de valor (mejor, m\u00e1s emocionante) o expresiones subjetivas (creo que).'
        },
        {
          id: 4,
          type: 'multiple',
          stimulus: '<p><em>&laquo;Se&ntilde;or Director: Le escribo para manifestar mi descontento con la nueva pol&iacute;tica de estacionamientos del municipio. Considero que aumentar las tarifas en un 40% es abusivo y perjudica directamente a los trabajadores que necesitan movilizarse diariamente. Espero que las autoridades reconsideren esta medida.&raquo;</em></p>',
          question: '\u00bfQu\u00e9 tipo de texto es el fragmento anterior?',
          options: ['Editorial', 'Noticia', 'Carta al director', 'Columna de opini\u00f3n'],
          answer: 2,
          explanation: 'Es una carta al director porque: se dirige expl\u00edcitamente al director de un medio, expresa una opini\u00f3n personal sobre un tema p\u00fablico, y tiene un emisor identificable que no es periodista del medio.'
        },
        {
          id: 5,
          type: 'multiple',
          stimulus: '<p><em>&laquo;As&iacute; como una casa necesita cimientos s&oacute;lidos para mantenerse en pie, la educaci&oacute;n de un pa&iacute;s requiere una base s&oacute;lida de inversi&oacute;n estatal.&raquo;</em></p>',
          question: '\u00bfQu\u00e9 tipo de argumento se utiliza en el texto?',
          options: ['De autoridad', 'De causa-efecto', 'Por analog\u00eda', 'Por datos estad\u00edsticos'],
          answer: 2,
          explanation: 'Es un argumento por analog\u00eda porque compara dos situaciones diferentes (casa/cimientos y pa\u00eds/educaci\u00f3n) para hacer comprensible la idea.'
        },
        {
          id: 6,
          type: 'multiple',
          stimulus: null,
          question: 'En la oraci\u00f3n \u00abEl proyecto fue un completo fiasco, pues no logr\u00f3 ning\u00fan objetivo\u00bb, la palabra \u00abfiasco\u00bb puede reemplazarse por:',
          options: ['\u00c9xito', 'Fracaso', 'Misterio', 'Desaf\u00edo'],
          answer: 1,
          explanation: 'El contexto indica un resultado negativo (no logr\u00f3 ning\u00fan objetivo), por lo que fiasco es sin\u00f3nimo de fracaso.'
        },
        {
          id: 7,
          type: 'multiple',
          stimulus: '<p><em>&laquo;&iexcl;NUEVO JUG0 NATURAL SOLAR! Ren&aacute;cete cada ma&ntilde;ana con la energ&iacute;a del sol. 100% fruta, 0% az&uacute;car a&ntilde;adida. &iexcl;Prub&aacute;lo YA en tu supermercado favorito!&raquo;</em></p>',
          question: '\u00bfCu\u00e1l es el prop\u00f3sito de este texto?',
          options: [
            'Informar sobre un producto nuevo.',
            'Persuadir al lector para que compre el producto.',
            'Instruir sobre c\u00f3mo preparar un jugo.',
            'Narrar la historia del jugo Solar.'
          ],
          answer: 1,
          explanation: 'Es un texto publicitario cuyo prop\u00f3sito es persuadir al consumidor. Usa imperativos (\u00abPru\u00e9balo YA\u00bb), exclamaciones y lenguaje emotivo.'
        },
        {
          id: 8,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l de los siguientes es un recurso NO VERBAL?',
          options: [
            'Un t\u00edtulo en negrita.',
            'Un gr\u00e1fico de barras con datos de poblaci\u00f3n.',
            'Una cita entre comillas.',
            'Una lista con vi\u00f1etas.'
          ],
          answer: 1,
          explanation: 'Un gr\u00e1fico de barras es un recurso no verbal (visual). Los t\u00edtulos, citas y listas son recursos verbales (usan palabras).'
        },
        {
          id: 9,
          type: 'multiple',
          stimulus: '<p><em>&laquo;Pedro no hablaba con nadie. Llegaba al trabajo, se sentaba en su escritorio y no levantaba la vista hasta la hora de salida. Si alguien le preguntaba algo, respond&iacute;a con monos&iacute;labos.&raquo;</em></p>',
          question: '\u00bfQu\u00e9 tipo de caracterizaci\u00f3n se usa para describir a Pedro?',
          options: ['Directa f\u00edsica', 'Directa psicol\u00f3gica', 'Indirecta', 'Social'],
          answer: 2,
          explanation: 'Es caracterizaci\u00f3n indirecta porque el lector infiere que Pedro es introvertido o retra\u00eddo a partir de sus acciones (no hablar, responder con monos\u00edlabos), sin que el narrador lo diga expl\u00edcitamente.'
        },
        {
          id: 10,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 conector indica una relaci\u00f3n de OPOSICI\u00d3N?',
          options: ['Adem\u00e1s', 'Sin embargo', 'Por lo tanto', 'Es decir'],
          answer: 1,
          explanation: '\u00abSin embargo\u00bb introduce una idea contraria o un contraste. \u00abAdem\u00e1s\u00bb es adici\u00f3n, \u00abpor lo tanto\u00bb es consecuencia, y \u00abes decir\u00bb es explicaci\u00f3n.'
        },
        {
          id: 11,
          type: 'open',
          stimulus: '<p><em>&laquo;La lectura es la herramienta m&aacute;s poderosa para combatir la ignorancia. Diversos estudios demuestran que los pa&iacute;ses con mayores &iacute;ndices de lectura tienen menor desigualdad social. Por ejemplo, en Noruega, donde se leen en promedio 15 libros al a&ntilde;o por persona, los indicadores de desarrollo humano son de los m&aacute;s altos del mundo. En consecuencia, invertir en bibliotecas p&uacute;blicas y programas de fomento lector deber&iacute;a ser una prioridad nacional.&raquo;</em></p>',
          question: 'Identifica la tesis, un argumento y su tipo, y la conclusi\u00f3n del texto.',
          options: null,
          answer: 'Tesis: La lectura es la herramienta m\u00e1s poderosa para combatir la ignorancia. Argumento: el ejemplo de Noruega (argumento por ejemplo/datos), donde altos \u00edndices de lectura se correlacionan con alto desarrollo humano. Conclusi\u00f3n: invertir en bibliotecas y programas de fomento lector deber\u00eda ser prioridad nacional.',
          explanation: 'La tesis est\u00e1 en la primera oraci\u00f3n. El argumento combina ejemplo (Noruega) con datos (15 libros al a\u00f1o). La conclusi\u00f3n se introduce con \u00aben consecuencia\u00bb.'
        },
        {
          id: 12,
          type: 'multiple',
          stimulus: '<p><em>&laquo;1. Lavar y pelar las papas. 2. Cortarlas en rodajas finas. 3. Fre&iacute;r en aceite caliente hasta que est&eacute;n doradas. 4. Retirar y colocar sobre papel absorbente. 5. Salar a gusto.&raquo;</em></p>',
          question: '\u00bfQu\u00e9 tipo de texto es el fragmento anterior?',
          options: ['Narrativo', 'Argumentativo', 'Instructivo', 'Expositivo'],
          answer: 2,
          explanation: 'Es un texto instructivo porque indica paso a paso c\u00f3mo realizar una acci\u00f3n (preparar papas fritas), usando verbos en infinitivo y secuencia numerada.'
        },
        {
          id: 13,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l de las siguientes es una OPINI\u00d3N?',
          options: [
            'El agua hierve a 100\u00b0C a nivel del mar.',
            'La Tierra gira alrededor del Sol.',
            'Probablemente, la inteligencia artificial cambiar\u00e1 la educaci\u00f3n para siempre.',
            'Santiago es la capital de Chile.'
          ],
          answer: 2,
          explanation: 'El uso de \u00abprobablemente\u00bb y la proyecci\u00f3n hacia el futuro la convierten en una opini\u00f3n (no es verificable en el presente). Las dem\u00e1s son hechos comprobables.'
        },
        {
          id: 14,
          type: 'open',
          stimulus: '<p><em>&laquo;El viejo pescador sali&oacute; al mar como cada madrugada. El cielo estaba gris y el viento soplaba con fuerza. Sab&iacute;a que ser&iacute;a un d&iacute;a dif&iacute;cil, pero la necesidad era m&aacute;s fuerte que el miedo. Llevaba 40 a&ntilde;os haciendo lo mismo, y el mar era lo &uacute;nico que conoc&iacute;a.&raquo;</em></p>',
          question: 'Describe al personaje del texto en sus dimensiones f\u00edsica, psicol\u00f3gica y social.',
          options: null,
          answer: 'F\u00edsico: es un hombre viejo/anciano. Psicol\u00f3gico: es valiente y perseverante, pues sale a pesar del miedo y las condiciones adversas; la necesidad lo motiva. Social: es pescador, probablemente de clase humilde, con 40 a\u00f1os de oficio; el mar es su \u00fanico mundo, lo que sugiere un entorno social limitado.',
          explanation: 'La dimensi\u00f3n f\u00edsica se infiere de \u00abviejo\u00bb; la psicol\u00f3gica, de que supera el miedo por necesidad; la social, de su oficio humilde y su vida ligada exclusivamente al mar.'
        },
        {
          id: 15,
          type: 'multiple',
          stimulus: '<p><em>&laquo;La <strong>resiliencia</strong>, entendida como la capacidad de sobreponerse a situaciones adversas, es una habilidad fundamental en la vida moderna.&raquo;</em></p>',
          question: '\u00bfQu\u00e9 estrategia de vocabulario en contexto se usa para explicar \u00abresiliencia\u00bb?',
          options: ['Sin\u00f3nimo', 'Ant\u00f3nimo', 'Definici\u00f3n en el texto', 'Causa-efecto'],
          answer: 2,
          explanation: 'El texto define directamente el t\u00e9rmino usando la expresi\u00f3n \u00abentendida como\u00bb, que introduce una definici\u00f3n expl\u00edcita dentro de la oraci\u00f3n.'
        },
        {
          id: 16,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 tipo de argumento se usa en \u00abSeg\u00fan el Dr. P\u00e9rez, experto en nutrici\u00f3n de la Universidad de Chile, el consumo de az\u00facar debe reducirse un 50%\u00bb?',
          options: ['De analog\u00eda', 'De autoridad', 'De experiencia personal', 'De causa-efecto'],
          answer: 1,
          explanation: 'Se cita a un experto reconocido (Dr. P\u00e9rez, Universidad de Chile) para respaldar la afirmaci\u00f3n. Esto es un argumento de autoridad.'
        }
      ]
    },

    // =====================================================================
    // 2. MATEM\u00c1TICA
    // =====================================================================
    {
      id: 'mate',
      name: 'Matem\u00e1tica',
      icon: '📐',
      color: '--c-mate',
      sections: [
        {
          id: 'mate-raices',
          title: 'Ra\u00edces cuadradas',
          content: `
<h4>Concepto</h4>
<p>La <span class="highlight">ra&iacute;z cuadrada</span> de un n&uacute;mero <em>a</em> es el n&uacute;mero <em>b</em> tal que <em>b&sup2; = a</em>. Se escribe &radic;a = b.</p>
<p>Tambi&eacute;n puede expresarse como <span class="highlight">exponente fraccionario</span>: &radic;a = a<sup>1/2</sup></p>

<h4>Propiedades</h4>
<ul>
  <li>&radic;(a &middot; b) = &radic;a &middot; &radic;b</li>
  <li>&radic;(a / b) = &radic;a / &radic;b</li>
  <li>(&radic;a)&sup2; = a</li>
  <li>&radic;a&sup2; = |a|</li>
</ul>

<h4>Cuadrados perfectos (1 a 18)</h4>
<table>
  <tr><th>n</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>
  <tr><th>n&sup2;</th><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td></tr>
  <tr><th>n</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th></tr>
  <tr><th>n&sup2;</th><td>100</td><td>121</td><td>144</td><td>169</td><td>196</td><td>225</td><td>256</td><td>289</td><td>324</td></tr>
</table>

<div class="key-concept">
  <strong>Simplificar ra&iacute;ces:</strong> &radic;72 = &radic;(36 &middot; 2) = &radic;36 &middot; &radic;2 = 6&radic;2. Busca el cuadrado perfecto m&aacute;s grande que divida al n&uacute;mero.
</div>`
        },
        {
          id: 'mate-exponencial-log',
          title: 'Funciones exponencial y logar\u00edtmica',
          content: `
<h4>Funci&oacute;n exponencial</h4>
<p>Forma: <span class="highlight">f(x) = a<sup>x</sup></span>, donde a &gt; 0 y a &ne; 1.</p>
<ul>
  <li>Si a &gt; 1: la funci&oacute;n es <strong>creciente</strong> (crecimiento exponencial).</li>
  <li>Si 0 &lt; a &lt; 1: la funci&oacute;n es <strong>decreciente</strong> (decaimiento exponencial).</li>
  <li>Siempre pasa por el punto (0, 1), porque a<sup>0</sup> = 1.</li>
  <li>Dominio: todos los reales. Rango: n&uacute;meros positivos (y &gt; 0).</li>
</ul>

<h4>Funci&oacute;n logar&iacute;tmica</h4>
<p>Forma: <span class="highlight">f(x) = log<sub>a</sub>(x)</span>. Es la <strong>inversa</strong> de la exponencial.</p>
<p>Si a<sup>y</sup> = x, entonces log<sub>a</sub>(x) = y.</p>
<ul>
  <li>Siempre pasa por (1, 0), porque log<sub>a</sub>(1) = 0.</li>
  <li>Pasa por (a, 1), porque log<sub>a</sub>(a) = 1.</li>
  <li>Dominio: x &gt; 0. Rango: todos los reales.</li>
</ul>

<h4>Valores clave para recordar</h4>
<table>
  <tr><th>Expresi&oacute;n</th><th>Valor</th><th>Raz&oacute;n</th></tr>
  <tr><td>log(1)</td><td>0</td><td>Cualquier base elevada a 0 es 1</td></tr>
  <tr><td>log<sub>a</sub>(a)</td><td>1</td><td>a<sup>1</sup> = a</td></tr>
  <tr><td>log<sub>10</sub>(100)</td><td>2</td><td>10&sup2; = 100</td></tr>
  <tr><td>log<sub>2</sub>(8)</td><td>3</td><td>2&sup3; = 8</td></tr>
</table>

<div class="key-concept">
  <strong>Relaci&oacute;n inversa:</strong> si y = a<sup>x</sup>, entonces x = log<sub>a</sub>(y). Son funciones sim&eacute;tricas respecto a la recta y = x.
</div>`
        },
        {
          id: 'mate-cuadratica',
          title: 'Funci\u00f3n cuadr\u00e1tica',
          content: `
<h4>Forma general</h4>
<p><span class="highlight">f(x) = ax&sup2; + bx + c</span>, donde a &ne; 0.</p>
<p>Su gr&aacute;fico es una <span class="highlight">par&aacute;bola</span>.</p>

<h4>Orientaci&oacute;n</h4>
<ul>
  <li>Si <strong>a &gt; 0</strong>: la par&aacute;bola <strong>abre hacia arriba</strong> (tiene un m&iacute;nimo).</li>
  <li>Si <strong>a &lt; 0</strong>: la par&aacute;bola <strong>abre hacia abajo</strong> (tiene un m&aacute;ximo).</li>
</ul>

<h4>V&eacute;rtice</h4>
<p>El v&eacute;rtice es el punto m&aacute;s alto o m&aacute;s bajo de la par&aacute;bola:</p>
<p><span class="highlight">x<sub>v</sub> = &minus;b / (2a)</span></p>
<p>y<sub>v</sub> = f(x<sub>v</sub>)</p>

<h4>Elementos clave</h4>
<ul>
  <li><strong>Eje de simetr&iacute;a:</strong> la recta vertical x = &minus;b/(2a).</li>
  <li><strong>Intercepto con eje Y:</strong> el punto (0, c).</li>
  <li><strong>Ra&iacute;ces / ceros:</strong> los valores de x donde f(x) = 0 (donde la par&aacute;bola corta el eje X).</li>
</ul>

<div class="key-concept">
  <strong>Ejemplo:</strong> f(x) = &minus;2x&sup2; + 8x &minus; 6. Aqu&iacute; a = &minus;2, b = 8, c = &minus;6.<br>
  V&eacute;rtice: x = &minus;8/(2&middot;(&minus;2)) = &minus;8/(&minus;4) = 2. <br>
  y = &minus;2(4) + 8(2) &minus; 6 = &minus;8 + 16 &minus; 6 = 2. V&eacute;rtice: (2, 2). <br>
  Como a &lt; 0, la par&aacute;bola abre hacia abajo y (2, 2) es el punto m&aacute;ximo.
</div>`
        },
        {
          id: 'mate-ecuaciones2',
          title: 'Ecuaciones de segundo grado',
          content: `
<h4>Forma general</h4>
<p><span class="highlight">ax&sup2; + bx + c = 0</span></p>

<h4>M&eacute;todo 1: Factorizaci&oacute;n</h4>
<p>Buscar dos n&uacute;meros que multiplicados den <em>c</em> y sumados den <em>b</em> (cuando a = 1).</p>
<p>Ejemplo: x&sup2; + 5x + 6 = 0 &rarr; (x + 2)(x + 3) = 0 &rarr; x = &minus;2 o x = &minus;3</p>

<h4>M&eacute;todo 2: F&oacute;rmula general (cuadr&aacute;tica)</h4>
<p><span class="highlight">x = (&minus;b &plusmn; &radic;(b&sup2; &minus; 4ac)) / (2a)</span></p>

<h4>Discriminante (&Delta; = b&sup2; &minus; 4ac)</h4>
<table>
  <tr><th>Discriminante</th><th>Resultado</th></tr>
  <tr><td>&Delta; &gt; 0</td><td>Dos soluciones reales distintas</td></tr>
  <tr><td>&Delta; = 0</td><td>Una soluci&oacute;n real (ra&iacute;z doble)</td></tr>
  <tr><td>&Delta; &lt; 0</td><td>Sin soluciones reales</td></tr>
</table>

<div class="key-concept">
  <strong>Ejemplo con f&oacute;rmula:</strong> 2x&sup2; &minus; 4x &minus; 6 = 0 &rarr; a=2, b=&minus;4, c=&minus;6<br>
  &Delta; = 16 &minus; 4(2)(&minus;6) = 16 + 48 = 64<br>
  x = (4 &plusmn; 8) / 4 &rarr; x = 3 o x = &minus;1
</div>`
        },
        {
          id: 'mate-trigo',
          title: 'Trigonometr\u00eda',
          content: `
<h4>Razones trigonom&eacute;tricas (SOH-CAH-TOA)</h4>
<p>En un tri&aacute;ngulo rect&aacute;ngulo, dado un &aacute;ngulo &theta;:</p>
<ul>
  <li><span class="highlight">sen(&theta;)</span> = cateto opuesto / hipotenusa (<strong>SOH</strong>)</li>
  <li><span class="highlight">cos(&theta;)</span> = cateto adyacente / hipotenusa (<strong>CAH</strong>)</li>
  <li><span class="highlight">tan(&theta;)</span> = cateto opuesto / cateto adyacente (<strong>TOA</strong>)</li>
</ul>

<h4>Valores notables</h4>
<table>
  <tr><th>&theta;</th><th>sen(&theta;)</th><th>cos(&theta;)</th><th>tan(&theta;)</th></tr>
  <tr><td>30&deg;</td><td>1/2</td><td>&radic;3/2</td><td>&radic;3/3</td></tr>
  <tr><td>45&deg;</td><td>&radic;2/2</td><td>&radic;2/2</td><td>1</td></tr>
  <tr><td>60&deg;</td><td>&radic;3/2</td><td>1/2</td><td>&radic;3</td></tr>
</table>

<h4>Problemas de altura y distancia</h4>
<p>Patr&oacute;n t&iacute;pico: desde un punto se mira la cima de un edificio con un &aacute;ngulo de elevaci&oacute;n &theta;, a una distancia <em>d</em> de la base.</p>
<p><span class="highlight">Altura = d &middot; tan(&theta;)</span></p>

<div class="key-concept">
  <strong>Ejemplo:</strong> Desde 20 m de un edificio, el &aacute;ngulo de elevaci&oacute;n es 60&deg;.<br>
  Altura = 20 &middot; tan(60&deg;) = 20 &middot; &radic;3 &asymp; 34,6 m.
</div>`
        },
        {
          id: 'mate-estadistica',
          title: 'Estad\u00edstica',
          content: `
<h4>Tabla de frecuencias con intervalos</h4>
<p>Cuando los datos son muchos, se agrupan en <span class="highlight">intervalos de clase</span>.</p>
<table>
  <tr><th>Intervalo</th><th>Marca de clase (x<sub>i</sub>)</th><th>Frecuencia (f<sub>i</sub>)</th></tr>
  <tr><td>[10, 20)</td><td>15</td><td>Cantidad de datos en ese rango</td></tr>
  <tr><td>[20, 30)</td><td>25</td><td>...</td></tr>
</table>
<p>La <span class="highlight">marca de clase</span> es el punto medio del intervalo: (l&iacute;mite inferior + l&iacute;mite superior) / 2.</p>

<h4>Histograma</h4>
<p>Es un gr&aacute;fico de barras donde:</p>
<ul>
  <li>El eje X muestra los intervalos.</li>
  <li>El eje Y muestra la frecuencia.</li>
  <li>Las barras son <strong>contiguas</strong> (sin espacio entre ellas).</li>
</ul>

<h4>Poblaci&oacute;n y muestra</h4>
<ul>
  <li><span class="highlight">Poblaci&oacute;n:</span> totalidad de individuos o elementos que se estudian.</li>
  <li><span class="highlight">Muestra:</span> subconjunto representativo de la poblaci&oacute;n.</li>
</ul>

<div class="key-concept">
  <strong>Clave:</strong> una muestra es &uacute;til solo si es <em>representativa</em> (refleja las caracter&iacute;sticas de la poblaci&oacute;n). Una muestra sesgada produce conclusiones err&oacute;neas.
</div>`
        },
        {
          id: 'mate-probabilidad',
          title: 'Probabilidad',
          content: `
<h4>Conceptos b&aacute;sicos</h4>
<p><span class="highlight">P(A) = casos favorables / casos posibles</span></p>
<p>0 &le; P(A) &le; 1. Si P(A) = 0, el evento es imposible. Si P(A) = 1, es seguro.</p>

<h4>Regla de la suma (eventos mutuamente excluyentes)</h4>
<p>Si A y B no pueden ocurrir al mismo tiempo:</p>
<p><span class="highlight">P(A o B) = P(A) + P(B)</span></p>
<p>Ejemplo: P(sacar 2 o 5 en un dado) = 1/6 + 1/6 = 2/6 = 1/3</p>

<h4>Regla del producto (eventos independientes)</h4>
<p>Si A y B son independientes (uno no afecta al otro):</p>
<p><span class="highlight">P(A y B) = P(A) &middot; P(B)</span></p>
<p>Ejemplo: P(cara en moneda Y 6 en dado) = 1/2 &middot; 1/6 = 1/12</p>

<h4>Probabilidad condicional</h4>
<p><span class="highlight">P(A|B) = P(A y B) / P(B)</span></p>
<p>Es la probabilidad de A, sabiendo que B ya ocurri&oacute;.</p>

<div class="key-concept">
  <strong>Ejemplo:</strong> En una urna hay 5 rojas y 3 azules. Se saca una sin reposici&oacute;n.<br>
  P(2&ordf; roja | 1&ordf; fue roja) = 4/7, porque quedan 4 rojas de 7 bolas totales.
</div>`
        }
      ],
      questions: [
        {
          id: 1,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1nto es \u221a200 simplificado?',
          options: ['5\u221a8', '10\u221a2', '2\u221a50', '4\u221a5'],
          answer: 1,
          explanation: '\u221a200 = \u221a(100 \u00b7 2) = \u221a100 \u00b7 \u221a2 = 10\u221a2. Se busca el mayor cuadrado perfecto que divida a 200, que es 100.'
        },
        {
          id: 2,
          type: 'multiple',
          stimulus: null,
          question: 'Si \u221ax = x^(1/2), entonces \u221a(x\u00b3) es equivalente a:',
          options: ['x^(3/2)', 'x^(2/3)', 'x^3', 'x^(1/3)'],
          answer: 0,
          explanation: '\u221a(x\u00b3) = (x\u00b3)^(1/2) = x^(3/2), aplicando la propiedad de potencia de potencia: se multiplican los exponentes.'
        },
        {
          id: 3,
          type: 'multiple',
          stimulus: '<p>Una colonia de bacterias se duplica cada hora. Si inicialmente hay 500 bacterias, la cantidad despu&eacute;s de <em>t</em> horas es f(t) = 500 &middot; 2<sup>t</sup>.</p>',
          question: '\u00bfCu\u00e1ntas bacterias habr\u00e1 despu\u00e9s de 4 horas?',
          options: ['2.000', '4.000', '8.000', '16.000'],
          answer: 2,
          explanation: 'f(4) = 500 \u00b7 2\u2074 = 500 \u00b7 16 = 8.000 bacterias.'
        },
        {
          id: 4,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1nto vale log\u2082(32)?',
          options: ['4', '5', '6', '8'],
          answer: 1,
          explanation: 'log\u2082(32) = 5 porque 2\u2075 = 32.'
        },
        {
          id: 5,
          type: 'multiple',
          stimulus: '<p>Una pelota se lanza hacia arriba y su altura en metros est&aacute; dada por h(t) = &minus;5t&sup2; + 20t + 1, donde t es el tiempo en segundos.</p>',
          question: '\u00bfCu\u00e1l es la altura m\u00e1xima que alcanza la pelota?',
          options: ['20 m', '21 m', '25 m', '16 m'],
          answer: 1,
          explanation: 'El v\u00e9rtice est\u00e1 en t = \u2212b/(2a) = \u221220/(2\u00b7(\u22125)) = \u221220/(\u221210) = 2 segundos. h(2) = \u22125(4) + 20(2) + 1 = \u221220 + 40 + 1 = 21 m.'
        },
        {
          id: 6,
          type: 'multiple',
          stimulus: null,
          question: 'La ecuaci\u00f3n x\u00b2 \u2212 6x + 9 = 0 tiene:',
          options: [
            'Dos soluciones reales distintas',
            'Una soluci\u00f3n real (ra\u00edz doble)',
            'Sin soluciones reales',
            'Tres soluciones'
          ],
          answer: 1,
          explanation: '\u0394 = (\u22126)\u00b2 \u2212 4(1)(9) = 36 \u2212 36 = 0. Cuando el discriminante es 0, hay una soluci\u00f3n (ra\u00edz doble): x = 3.'
        },
        {
          id: 7,
          type: 'multiple',
          stimulus: null,
          question: 'Resuelve: 2x\u00b2 + 3x \u2212 5 = 0',
          options: ['x = 1 y x = \u22125/2', 'x = \u22121 y x = 5/2', 'x = 5 y x = \u22121/2', 'x = \u22125 y x = 1/2'],
          answer: 0,
          explanation: 'Usando la f\u00f3rmula: x = (\u22123 \u00b1 \u221a(9+40)) / 4 = (\u22123 \u00b1 7) / 4. As\u00ed x = 4/4 = 1 o x = \u221210/4 = \u22125/2.'
        },
        {
          id: 8,
          type: 'multiple',
          stimulus: '<p>Desde un punto en el suelo, a 30 metros de la base de un edificio, el &aacute;ngulo de elevaci&oacute;n hacia la azotea es de 45&deg;.</p>',
          question: '\u00bfCu\u00e1l es la altura del edificio?',
          options: ['15 m', '30 m', '30\u221a2 m', '15\u221a3 m'],
          answer: 1,
          explanation: 'Altura = distancia \u00b7 tan(45\u00b0) = 30 \u00b7 1 = 30 m. Recordar que tan(45\u00b0) = 1.'
        },
        {
          id: 9,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l es el valor de sen(30\u00b0)?',
          options: ['\u221a3/2', '1/2', '\u221a2/2', '1'],
          answer: 1,
          explanation: 'sen(30\u00b0) = 1/2 es uno de los valores notables de la trigonometr\u00eda que conviene memorizar.'
        },
        {
          id: 10,
          type: 'multiple',
          stimulus: '<p>En una tabla de frecuencias, el intervalo [40, 60) tiene una frecuencia de 12.</p>',
          question: '\u00bfCu\u00e1l es la marca de clase de ese intervalo?',
          options: ['40', '45', '50', '60'],
          answer: 2,
          explanation: 'La marca de clase es el punto medio: (40 + 60) / 2 = 50.'
        },
        {
          id: 11,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l es la diferencia entre un histograma y un gr\u00e1fico de barras?',
          options: [
            'El histograma usa colores y el gr\u00e1fico de barras no.',
            'En el histograma las barras son contiguas porque representan intervalos continuos.',
            'El gr\u00e1fico de barras no tiene eje Y.',
            'No hay diferencia, son lo mismo.'
          ],
          answer: 1,
          explanation: 'En el histograma las barras son contiguas (sin espacio) porque representan intervalos continuos de una variable cuantitativa. En el gr\u00e1fico de barras hay separaci\u00f3n porque las categor\u00edas son discretas.'
        },
        {
          id: 12,
          type: 'multiple',
          stimulus: '<p>En una urna hay 4 bolas rojas y 6 azules. Se extrae una al azar.</p>',
          question: '\u00bfCu\u00e1l es la probabilidad de sacar una bola roja?',
          options: ['4/6', '6/10', '4/10', '1/4'],
          answer: 2,
          explanation: 'P(roja) = casos favorables / total = 4 / 10 = 2/5.'
        },
        {
          id: 13,
          type: 'multiple',
          stimulus: null,
          question: 'Se lanza una moneda y un dado. \u00bfCu\u00e1l es la probabilidad de obtener cara Y un n\u00famero par?',
          options: ['1/2', '1/4', '1/6', '1/12'],
          answer: 1,
          explanation: 'Son eventos independientes. P(cara) = 1/2. P(par en dado) = 3/6 = 1/2. P(cara Y par) = 1/2 \u00b7 1/2 = 1/4.'
        },
        {
          id: 14,
          type: 'open',
          stimulus: '<p>La funci&oacute;n f(x) = x&sup2; &minus; 4x + 3 representa la trayectoria de un proyectil.</p>',
          question: 'Encuentra las ra\u00edces (ceros) de la funci\u00f3n y las coordenadas del v\u00e9rtice.',
          options: null,
          answer: 'Ra\u00edces: x\u00b2 \u2212 4x + 3 = 0 \u2192 (x \u2212 1)(x \u2212 3) = 0 \u2192 x = 1 y x = 3. V\u00e9rtice: x = \u2212(\u22124)/(2\u00b71) = 2. f(2) = 4 \u2212 8 + 3 = \u22121. El v\u00e9rtice es (2, \u22121).',
          explanation: 'Se factoriza para las ra\u00edces y se usa la f\u00f3rmula x = \u2212b/(2a) para el v\u00e9rtice. Como a > 0, la par\u00e1bola abre hacia arriba y el v\u00e9rtice es un m\u00ednimo.'
        },
        {
          id: 15,
          type: 'open',
          stimulus: '<p>Una bolsa contiene 3 caramelos de lim&oacute;n, 5 de fresa y 2 de menta. Se sacan dos caramelos sin reposici&oacute;n.</p>',
          question: '\u00bfCu\u00e1l es la probabilidad de que el segundo sea de fresa, dado que el primero fue de lim\u00f3n?',
          options: null,
          answer: 'P(2\u00ba fresa | 1\u00ba lim\u00f3n) = 5/9. Al sacar un lim\u00f3n primero, quedan 9 caramelos en total (2 lim\u00f3n, 5 fresa, 2 menta). La probabilidad de sacar fresa es 5/9.',
          explanation: 'Es probabilidad condicional. Al no haber reposici\u00f3n, el espacio muestral cambia: de 10 baja a 9, y los de fresa siguen siendo 5.'
        },
        {
          id: 16,
          type: 'multiple',
          stimulus: null,
          question: 'Para la funci\u00f3n f(x) = 3\u02e3, \u00bfcu\u00e1l afirmaci\u00f3n es CORRECTA?',
          options: [
            'Pasa por el punto (0, 3)',
            'Pasa por el punto (0, 1)',
            'Es decreciente',
            'Su dominio son los n\u00fameros positivos'
          ],
          answer: 1,
          explanation: 'Toda funci\u00f3n exponencial f(x) = a\u02e3 pasa por (0, 1), porque a\u2070 = 1 para cualquier a > 0.'
        }
      ]
    },

    // =====================================================================
    // 3. CIENCIAS NATURALES
    // =====================================================================
    {
      id: 'ciencias',
      name: 'Ciencias Naturales',
      icon: '🔬',
      color: '--c-ciencias',
      sections: [
        {
          id: 'ciencias-homeostasis',
          title: 'Homeostasis',
          content: `
<h4>Definici&oacute;n</h4>
<p>La <span class="highlight">homeostasis</span> es la capacidad del organismo de mantener un medio interno estable a pesar de los cambios en el ambiente externo. Variables como la temperatura corporal, el pH sangu&iacute;neo y la glucemia se regulan constantemente.</p>

<h4>Sistemas involucrados</h4>
<ul>
  <li><span class="highlight">Sistema nervioso:</span> respuestas r&aacute;pidas mediante impulsos el&eacute;ctricos. Ejemplo: retirar la mano del fuego.</li>
  <li><span class="highlight">Sistema endocrino:</span> respuestas lentas y prolongadas mediante hormonas. Ejemplo: insulina para regular glucosa.</li>
  <li><span class="highlight">Sistema renal:</span> filtra la sangre, elimina desechos y regula agua, sales y pH.</li>
</ul>

<h4>Retroalimentaci&oacute;n negativa</h4>
<p>Es el mecanismo m&aacute;s com&uacute;n: cuando una variable se desv&iacute;a del valor normal, el cuerpo activa mecanismos para revertir el cambio.</p>
<p>Ejemplo: si la glucosa sube &rarr; p&aacute;ncreas libera insulina &rarr; glucosa baja &rarr; insulina deja de liberarse.</p>

<div class="key-concept">
  <strong>Clave:</strong> la homeostasis no es un estado fijo, sino un <em>equilibrio din&aacute;mico</em>: las variables oscilan dentro de un rango normal.
</div>`
        },
        {
          id: 'ciencias-nervioso',
          title: 'Sistema nervioso',
          content: `
<h4>La neurona</h4>
<p>Es la c&eacute;lula fundamental del sistema nervioso. Tiene tres partes:</p>
<ul>
  <li><span class="highlight">Cuerpo celular (soma):</span> contiene el n&uacute;cleo y organelos.</li>
  <li><span class="highlight">Dendritas:</span> reciben se&ntilde;ales de otras neuronas.</li>
  <li><span class="highlight">Ax&oacute;n:</span> conduce el impulso nervioso hacia otras c&eacute;lulas.</li>
</ul>

<h4>Sinapsis</h4>
<p>Es la conexi&oacute;n funcional entre dos neuronas. Puede ser:</p>
<ul>
  <li><strong>El&eacute;ctrica:</strong> el impulso pasa directamente (r&aacute;pida).</li>
  <li><strong>Qu&iacute;mica:</strong> usa neurotransmisores que cruzan el espacio sin&aacute;ptico (m&aacute;s com&uacute;n).</li>
</ul>

<h4>Organizaci&oacute;n</h4>
<table>
  <tr><th>Divisi&oacute;n</th><th>Componentes</th><th>Funci&oacute;n</th></tr>
  <tr><td><span class="highlight">SNC</span> (Sistema Nervioso Central)</td><td>Cerebro, cerebelo, tronco encef&aacute;lico, m&eacute;dula espinal</td><td>Procesar informaci&oacute;n, coordinar respuestas</td></tr>
  <tr><td><span class="highlight">SNP</span> (Sistema Nervioso Perif&eacute;rico)</td><td>Nervios craneales y espinales</td><td>Conectar SNC con &oacute;rganos y tejidos</td></tr>
</table>

<div class="key-concept">
  <strong>Recuerda:</strong> el SNP se subdivide en <em>som&aacute;tico</em> (voluntario, m&uacute;sculos esquel&eacute;ticos) y <em>aut&oacute;nomo</em> (involuntario: simp&aacute;tico y parasimp&aacute;tico).
</div>`
        },
        {
          id: 'ciencias-endocrino',
          title: 'Sistema endocrino',
          content: `
<h4>Gl&aacute;ndulas y hormonas principales</h4>
<table>
  <tr><th>Gl&aacute;ndula</th><th>Hormona</th><th>Funci&oacute;n</th></tr>
  <tr><td><span class="highlight">Hip&oacute;fisis (pituitaria)</span></td><td>Hormona del crecimiento (GH), TSH, FSH, LH</td><td>Regula crecimiento y otras gl&aacute;ndulas (&laquo;gl&aacute;ndula maestra&raquo;)</td></tr>
  <tr><td><span class="highlight">Tiroides</span></td><td>T3, T4</td><td>Regula metabolismo, temperatura</td></tr>
  <tr><td><span class="highlight">P&aacute;ncreas</span></td><td>Insulina, Glucag&oacute;n</td><td>Regula glucosa en sangre</td></tr>
  <tr><td><span class="highlight">Suprarrenales</span></td><td>Adrenalina, Cortisol</td><td>Respuesta al estr&eacute;s, inflamaci&oacute;n</td></tr>
  <tr><td><span class="highlight">G&oacute;nadas (ovarios/test&iacute;culos)</span></td><td>Estr&oacute;genos, Progesterona, Testosterona</td><td>Caracteres sexuales, reproducci&oacute;n</td></tr>
</table>

<div class="key-concept">
  <strong>Clave:</strong> las hormonas viajan por la <em>sangre</em> y act&uacute;an solo sobre c&eacute;lulas que tienen <em>receptores espec&iacute;ficos</em> (c&eacute;lulas diana). Por eso su efecto es selectivo.
</div>`
        },
        {
          id: 'ciencias-inmune',
          title: 'Sistema inmunol\u00f3gico',
          content: `
<h4>Inmunidad innata (inespec&iacute;fica)</h4>
<p>Primera l&iacute;nea de defensa, no distingue tipos de pat&oacute;genos:</p>
<ul>
  <li>Barreras f&iacute;sicas: piel, mucosas.</li>
  <li>Barreras qu&iacute;micas: l&aacute;grimas, saliva, &aacute;cido g&aacute;strico.</li>
  <li>C&eacute;lulas: fag&oacute;citos (macr&oacute;fagos, neutr&oacute;filos).</li>
  <li>Inflamaci&oacute;n y fiebre.</li>
</ul>

<h4>Inmunidad adaptativa (espec&iacute;fica)</h4>
<p>Se activa cuando la innata no es suficiente. Es espec&iacute;fica para cada pat&oacute;geno:</p>
<ul>
  <li><span class="highlight">Linfocitos B:</span> producen <em>anticuerpos</em> que neutralizan ant&iacute;genos.</li>
  <li><span class="highlight">Linfocitos T:</span> destruyen c&eacute;lulas infectadas directamente (T citot&oacute;xicos) o coordinan la respuesta (T helper).</li>
</ul>

<h4>Ant&iacute;genos y anticuerpos</h4>
<ul>
  <li><span class="highlight">Ant&iacute;geno:</span> mol&eacute;cula extra&ntilde;a que dispara la respuesta inmune.</li>
  <li><span class="highlight">Anticuerpo:</span> prote&iacute;na producida por linfocitos B, espec&iacute;fica contra un ant&iacute;geno.</li>
</ul>

<h4>Vacunas y memoria inmunol&oacute;gica</h4>
<p>Las vacunas introducen ant&iacute;genos debilitados o inactivos, estimulando la producci&oacute;n de <span class="highlight">c&eacute;lulas de memoria</span>. Si el pat&oacute;geno real aparece despu&eacute;s, la respuesta es r&aacute;pida y eficiente.</p>

<div class="key-concept">
  <strong>Importante:</strong> las vacunas NO curan enfermedades, <em>previenen</em> infecciones futuras al preparar al sistema inmune.
</div>`
        },
        {
          id: 'ciencias-genetica',
          title: 'Gen\u00e9tica y reproducci\u00f3n celular',
          content: `
<h4>Conceptos b&aacute;sicos</h4>
<ul>
  <li><span class="highlight">ADN:</span> mol&eacute;cula que almacena la informaci&oacute;n gen&eacute;tica. Tiene forma de doble h&eacute;lice.</li>
  <li><span class="highlight">Cromosoma:</span> ADN empaquetado con prote&iacute;nas. Humanos: 46 cromosomas (23 pares).</li>
  <li><span class="highlight">Gen:</span> segmento de ADN que codifica una prote&iacute;na o caracter&iacute;stica.</li>
  <li><span class="highlight">Alelo:</span> cada versi&oacute;n de un gen (ej.: color de ojos: marr&oacute;n o azul).</li>
</ul>

<h4>Mitosis vs. Meiosis</h4>
<table>
  <tr><th>Caracter&iacute;stica</th><th>Mitosis</th><th>Meiosis</th></tr>
  <tr><td>C&eacute;lulas resultantes</td><td>2 id&eacute;nticas</td><td>4 diferentes</td></tr>
  <tr><td>Dotaci&oacute;n</td><td>Diploides (2n)</td><td>Haploides (n)</td></tr>
  <tr><td>Funci&oacute;n</td><td>Crecimiento, reparaci&oacute;n</td><td>Producci&oacute;n de gametos</td></tr>
  <tr><td>Variabilidad</td><td>No genera</td><td>S&iacute; (entrecruzamiento)</td></tr>
  <tr><td>Divisiones</td><td>1</td><td>2</td></tr>
</table>

<div class="key-concept">
  <strong>Recuerda:</strong> la meiosis genera variabilidad gen&eacute;tica gracias al <em>entrecruzamiento</em> (crossing-over) y la <em>distribuci&oacute;n independiente</em> de cromosomas.
</div>`
        },
        {
          id: 'ciencias-fluidos',
          title: 'Fluidos y presi\u00f3n',
          content: `
<h4>Presi&oacute;n</h4>
<p><span class="highlight">Presi&oacute;n = Fuerza / &Aacute;rea</span> (P = F/A). Unidad SI: Pascal (Pa).</p>

<h4>Presi&oacute;n hidrost&aacute;tica</h4>
<p><span class="highlight">P = &rho; &middot; g &middot; h</span></p>
<ul>
  <li>&rho; (rho): densidad del l&iacute;quido (kg/m&sup3;)</li>
  <li>g: aceleraci&oacute;n de gravedad (9,8 m/s&sup2;)</li>
  <li>h: profundidad (m)</li>
</ul>
<p>La presi&oacute;n aumenta con la profundidad y depende solo de la densidad del l&iacute;quido, no de la forma del recipiente.</p>

<h4>Presi&oacute;n atmosf&eacute;rica</h4>
<p>Es la presi&oacute;n que ejerce el aire sobre la superficie terrestre. A nivel del mar: ~101.325 Pa (1 atm).</p>

<h4>Principio de Arqu&iacute;medes</h4>
<p><span class="highlight">Todo cuerpo sumergido en un fluido experimenta una fuerza de empuje igual al peso del fluido desplazado.</span></p>
<ul>
  <li>Si el empuje &gt; peso: el cuerpo <strong>flota</strong>.</li>
  <li>Si el empuje &lt; peso: el cuerpo <strong>se hunde</strong>.</li>
  <li>Si el empuje = peso: <strong>equilibrio</strong> (flota sumergido).</li>
</ul>`
        },
        {
          id: 'ciencias-electricidad',
          title: 'Electricidad',
          content: `
<h4>Conceptos fundamentales</h4>
<table>
  <tr><th>Magnitud</th><th>S&iacute;mbolo</th><th>Unidad</th><th>Descripci&oacute;n</th></tr>
  <tr><td>Carga el&eacute;ctrica</td><td>q</td><td>Coulomb (C)</td><td>Propiedad de la materia (+ o &minus;)</td></tr>
  <tr><td>Corriente</td><td>I</td><td>Ampere (A)</td><td>Flujo de cargas por unidad de tiempo</td></tr>
  <tr><td>Voltaje</td><td>V</td><td>Volt (V)</td><td>Diferencia de potencial que impulsa la corriente</td></tr>
  <tr><td>Resistencia</td><td>R</td><td>Ohm (&Omega;)</td><td>Oposici&oacute;n al paso de corriente</td></tr>
</table>

<h4>Ley de Ohm</h4>
<p><span class="highlight">V = I &middot; R</span></p>
<p>El voltaje es igual a la corriente multiplicada por la resistencia.</p>

<h4>Componentes de un circuito</h4>
<ul>
  <li><span class="highlight">Conductores:</span> materiales que permiten el flujo de corriente (cobre, aluminio).</li>
  <li><span class="highlight">Aislantes:</span> materiales que impiden el flujo (pl&aacute;stico, goma).</li>
  <li><span class="highlight">Fusible:</span> protege el circuito cortando la corriente si es excesiva.</li>
  <li><span class="highlight">Conexi&oacute;n a tierra:</span> redirige corrientes peligrosas al suelo.</li>
  <li><span class="highlight">Interruptor:</span> abre o cierra el circuito.</li>
</ul>

<div class="key-concept">
  <strong>Seguridad:</strong> un fusible se &laquo;quema&raquo; intencionalmente para proteger el circuito y prevenir incendios. La conexi&oacute;n a tierra protege a las personas de descargas.
</div>`
        },
        {
          id: 'ciencias-magnetismo',
          title: 'Magnetismo',
          content: `
<h4>Imanes</h4>
<p>Todo im&aacute;n tiene dos <span class="highlight">polos</span>: norte (N) y sur (S).</p>
<ul>
  <li>Polos iguales se <strong>repelen</strong>.</li>
  <li>Polos opuestos se <strong>atraen</strong>.</li>
  <li>No se puede aislar un polo magn&eacute;tico (si cortas un im&aacute;n, obtienes dos imanes completos).</li>
</ul>

<h4>Campo magn&eacute;tico</h4>
<p>Regi&oacute;n del espacio donde se manifiesta la fuerza magn&eacute;tica. Las l&iacute;neas de campo van del polo N al polo S por fuera del im&aacute;n.</p>

<h4>Electromagnetismo</h4>
<p>Una <span class="highlight">corriente el&eacute;ctrica genera un campo magn&eacute;tico</span> a su alrededor. Un solenoide (bobina) con corriente se comporta como un im&aacute;n.</p>

<h4>Inducci&oacute;n electromagn&eacute;tica</h4>
<p>Un <span class="highlight">campo magn&eacute;tico variable genera una corriente el&eacute;ctrica</span> en un conductor cercano (Ley de Faraday).</p>
<p>Aplicaciones: generadores el&eacute;ctricos, transformadores, motores el&eacute;ctricos, carga inal&aacute;mbrica.</p>`
        },
        {
          id: 'ciencias-atomicos',
          title: 'Modelos at\u00f3micos',
          content: `
<h4>Evoluci&oacute;n de los modelos</h4>
<table>
  <tr><th>Modelo</th><th>A&ntilde;o aprox.</th><th>Descripci&oacute;n</th><th>Limitaci&oacute;n</th></tr>
  <tr><td><span class="highlight">Dalton</span></td><td>1803</td><td>&Aacute;tomo como esfera maciza e indivisible</td><td>No explica la electricidad en la materia</td></tr>
  <tr><td><span class="highlight">Thomson</span></td><td>1897</td><td>&laquo;Bud&iacute;n de pasas&raquo;: masa positiva con electrones incrustados</td><td>No explica la concentraci&oacute;n de carga positiva</td></tr>
  <tr><td><span class="highlight">Rutherford</span></td><td>1911</td><td>N&uacute;cleo peque&ntilde;o y denso (+), electrones girando alrededor</td><td>No explica por qu&eacute; los electrones no caen al n&uacute;cleo</td></tr>
  <tr><td><span class="highlight">Bohr</span></td><td>1913</td><td>Electrones en &oacute;rbitas fijas (niveles de energ&iacute;a)</td><td>Solo funciona bien para hidr&oacute;geno</td></tr>
</table>

<div class="key-concept">
  <strong>Clave:</strong> cada modelo surge para resolver las limitaciones del anterior. La ciencia avanza por <em>refinamiento progresivo</em> de las ideas.
</div>`
        },
        {
          id: 'ciencias-periodica',
          title: 'Tabla peri\u00f3dica y enlaces',
          content: `
<h4>Organizaci&oacute;n</h4>
<ul>
  <li><span class="highlight">Per&iacute;odos</span> (filas): indican el n&uacute;mero de niveles de energ&iacute;a. Hay 7 per&iacute;odos.</li>
  <li><span class="highlight">Grupos</span> (columnas): elementos con propiedades qu&iacute;micas similares. Hay 18 grupos.</li>
</ul>

<h4>Grupos principales</h4>
<table>
  <tr><th>Grupo</th><th>Nombre</th><th>Electrones de valencia</th><th>Ejemplo</th></tr>
  <tr><td>1</td><td>Alcalinos</td><td>1</td><td>Na, K, Li</td></tr>
  <tr><td>2</td><td>Alcalinot&eacute;rreos</td><td>2</td><td>Ca, Mg</td></tr>
  <tr><td>17</td><td>Hal&oacute;genos</td><td>7</td><td>Cl, F, Br</td></tr>
  <tr><td>18</td><td>Gases nobles</td><td>8 (estables)</td><td>He, Ne, Ar</td></tr>
</table>

<h4>Tipos de enlace</h4>
<table>
  <tr><th>Enlace</th><th>Entre</th><th>Mecanismo</th><th>Ejemplo</th></tr>
  <tr><td><span class="highlight">I&oacute;nico</span></td><td>Metal + No metal</td><td>Transferencia de electrones</td><td>NaCl (sal)</td></tr>
  <tr><td><span class="highlight">Covalente</span></td><td>No metal + No metal</td><td>Compartir electrones</td><td>H&sub2;O (agua)</td></tr>
  <tr><td><span class="highlight">Met&aacute;lico</span></td><td>Metal + Metal</td><td>Electrones compartidos en &laquo;nube&raquo;</td><td>Fe (hierro), Cu (cobre)</td></tr>
</table>`
        },
        {
          id: 'ciencias-organica',
          title: 'Qu\u00edmica org\u00e1nica y pol\u00edmeros',
          content: `
<h4>El carbono</h4>
<p>El <span class="highlight">carbono</span> es la base de la qu&iacute;mica org&aacute;nica. Puede formar 4 enlaces y crear cadenas largas, anillos y ramificaciones.</p>

<h4>Grupos funcionales</h4>
<table>
  <tr><th>Grupo</th><th>F&oacute;rmula</th><th>Se encuentra en</th></tr>
  <tr><td><span class="highlight">Hidroxilo</span></td><td>&minus;OH</td><td>Alcoholes (etanol)</td></tr>
  <tr><td><span class="highlight">Carboxilo</span></td><td>&minus;COOH</td><td>&Aacute;cidos org&aacute;nicos (vinagre)</td></tr>
  <tr><td><span class="highlight">Amino</span></td><td>&minus;NH&sub2;</td><td>Amino&aacute;cidos, prote&iacute;nas</td></tr>
  <tr><td><span class="highlight">Carbonilo</span></td><td>C=O</td><td>Aldeh&iacute;dos, cetonas</td></tr>
  <tr><td><span class="highlight">&Eacute;ster</span></td><td>&minus;COO&minus;</td><td>Grasas, aceites, fragancias</td></tr>
</table>

<h4>Pol&iacute;meros</h4>
<ul>
  <li><span class="highlight">Naturales:</span> ADN, prote&iacute;nas, celulosa, almid&oacute;n, caucho natural.</li>
  <li><span class="highlight">Sint&eacute;ticos:</span> pl&aacute;sticos (PET, PVC, polietileno), nailon, poli&eacute;ster.</li>
</ul>
<p>Un pol&iacute;mero es una macromol&eacute;cula formada por la repetici&oacute;n de unidades peque&ntilde;as llamadas <span class="highlight">mon&oacute;meros</span>.</p>`
        },
        {
          id: 'ciencias-evolucion',
          title: 'Evoluci\u00f3n',
          content: `
<h4>Lamarck vs. Darwin</h4>
<table>
  <tr><th>Aspecto</th><th>Lamarck</th><th>Darwin</th></tr>
  <tr><td>Mecanismo</td><td>Herencia de caracteres adquiridos</td><td>Selecci&oacute;n natural</td></tr>
  <tr><td>Idea central</td><td>El uso/desuso modifica &oacute;rganos y eso se hereda</td><td>Los m&aacute;s aptos sobreviven y se reproducen</td></tr>
  <tr><td>Ejemplo</td><td>Las jirafas estiraron el cuello y lo heredaron</td><td>Jirafas con cuello largo ten&iacute;an ventaja y dejaron m&aacute;s cr&iacute;as</td></tr>
  <tr><td>Validez actual</td><td>Refutada</td><td>Aceptada y ampliada</td></tr>
</table>

<h4>Evidencias de la evoluci&oacute;n</h4>
<ul>
  <li><span class="highlight">F&oacute;siles:</span> restos de organismos antiguos que muestran cambios a lo largo del tiempo.</li>
  <li><span class="highlight">Anatom&iacute;a comparada:</span> &oacute;rganos hom&oacute;logos (mismo origen, distinta funci&oacute;n) y an&aacute;logos (distinto origen, misma funci&oacute;n).</li>
  <li><span class="highlight">Embriolog&iacute;a:</span> embriones de distintas especies se parecen en etapas tempranas.</li>
  <li><span class="highlight">Biolog&iacute;a molecular:</span> especies emparentadas comparten secuencias de ADN similares.</li>
</ul>`
        },
        {
          id: 'ciencias-radiactividad',
          title: 'Radiactividad',
          content: `
<h4>Tipos de emisi&oacute;n radiactiva</h4>
<table>
  <tr><th>Tipo</th><th>Part&iacute;cula</th><th>Carga</th><th>Poder de penetraci&oacute;n</th><th>Detenida por</th></tr>
  <tr><td><span class="highlight">Alfa (&alpha;)</span></td><td>2 protones + 2 neutrones</td><td>+2</td><td>Bajo</td><td>Hoja de papel</td></tr>
  <tr><td><span class="highlight">Beta (&beta;)</span></td><td>Electr&oacute;n</td><td>&minus;1</td><td>Medio</td><td>L&aacute;mina de aluminio</td></tr>
  <tr><td><span class="highlight">Gamma (&gamma;)</span></td><td>Fot&oacute;n (onda)</td><td>0</td><td>Alto</td><td>Plomo grueso / concreto</td></tr>
</table>

<h4>Riesgos</h4>
<p>La radiaci&oacute;n puede da&ntilde;ar el ADN, causar mutaciones, c&aacute;ncer y enfermedades agudas por exposici&oacute;n prolongada o intensa.</p>

<h4>Aplicaciones</h4>
<ul>
  <li><span class="highlight">Medicina:</span> radioterapia (tratamiento de c&aacute;ncer), diagn&oacute;stico por im&aacute;genes.</li>
  <li><span class="highlight">Energ&iacute;a:</span> centrales nucleares (fisi&oacute;n nuclear).</li>
  <li><span class="highlight">Industria:</span> esterilizaci&oacute;n de alimentos, medici&oacute;n de espesores.</li>
  <li><span class="highlight">Dataci&oacute;n:</span> carbono-14 para determinar antig&uuml;edad de f&oacute;siles.</li>
</ul>`
        }
      ],
      questions: [
        {
          id: 1,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 es la homeostasis?',
          options: [
            'La capacidad del cuerpo de aumentar su temperatura.',
            'El mantenimiento del equilibrio interno del organismo frente a cambios externos.',
            'El proceso de digesti\u00f3n de los alimentos.',
            'La divisi\u00f3n celular para el crecimiento.'
          ],
          answer: 1,
          explanation: 'La homeostasis es la capacidad del organismo de mantener un medio interno estable (temperatura, pH, glucosa, etc.) a pesar de los cambios en el ambiente externo.'
        },
        {
          id: 2,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 hormona regula la glucosa en la sangre?',
          options: ['Adrenalina', 'Tiroxina (T4)', 'Insulina', 'Testosterona'],
          answer: 2,
          explanation: 'La insulina, producida por el p\u00e1ncreas, reduce la glucosa en sangre al facilitar su entrada en las c\u00e9lulas. El glucag\u00f3n (tambi\u00e9n pancre\u00e1tico) la aumenta.'
        },
        {
          id: 3,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 parte de la neurona recibe las se\u00f1ales de otras neuronas?',
          options: ['Ax\u00f3n', 'Soma', 'Dendritas', 'Vaina de mielina'],
          answer: 2,
          explanation: 'Las dendritas son las ramificaciones que reciben se\u00f1ales (est\u00edmulos) de otras neuronas o del ambiente. El ax\u00f3n, en cambio, transmite la se\u00f1al hacia la siguiente neurona.'
        },
        {
          id: 4,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l es la diferencia principal entre mitosis y meiosis?',
          options: [
            'La mitosis produce 4 c\u00e9lulas y la meiosis produce 2.',
            'La mitosis genera c\u00e9lulas haploides y la meiosis diploides.',
            'La mitosis genera 2 c\u00e9lulas diploides id\u00e9nticas; la meiosis genera 4 c\u00e9lulas haploides diferentes.',
            'No hay diferencia significativa.'
          ],
          answer: 2,
          explanation: 'La mitosis produce 2 c\u00e9lulas diploides (2n) gen\u00e9ticamente id\u00e9nticas (para crecimiento y reparaci\u00f3n). La meiosis produce 4 c\u00e9lulas haploides (n) gen\u00e9ticamente diferentes (gametos).'
        },
        {
          id: 5,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfC\u00f3mo act\u00faan las vacunas en el sistema inmunol\u00f3gico?',
          options: [
            'Matan directamente los virus en el cuerpo.',
            'Introducen ant\u00edgenos debilitados que estimulan c\u00e9lulas de memoria.',
            'Aumentan la temperatura corporal para destruir pat\u00f3genos.',
            'Reemplazan los gl\u00f3bulos blancos da\u00f1ados.'
          ],
          answer: 1,
          explanation: 'Las vacunas contienen ant\u00edgenos debilitados o inactivos que hacen que el sistema inmune produzca anticuerpos y c\u00e9lulas de memoria, preparando al cuerpo para una infecci\u00f3n real futura.'
        },
        {
          id: 6,
          type: 'multiple',
          stimulus: null,
          question: 'La presi\u00f3n hidrost\u00e1tica depende de:',
          options: [
            'La forma del recipiente.',
            'La densidad del l\u00edquido, la gravedad y la profundidad.',
            'El volumen total del l\u00edquido.',
            'La temperatura del l\u00edquido.'
          ],
          answer: 1,
          explanation: 'La f\u00f3rmula P = \u03c1\u00b7g\u00b7h indica que la presi\u00f3n hidrost\u00e1tica depende de la densidad (\u03c1), la gravedad (g) y la profundidad (h), no de la forma del recipiente ni del volumen total.'
        },
        {
          id: 7,
          type: 'multiple',
          stimulus: null,
          question: 'Seg\u00fan la Ley de Ohm, si un circuito tiene un voltaje de 12 V y una resistencia de 4 \u03a9, \u00bfcu\u00e1l es la corriente?',
          options: ['48 A', '3 A', '8 A', '0,33 A'],
          answer: 1,
          explanation: 'V = I \u00b7 R \u2192 I = V/R = 12/4 = 3 A.'
        },
        {
          id: 8,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 modelo at\u00f3mico propuso que los electrones giran en \u00f3rbitas fijas con niveles de energ\u00eda definidos?',
          options: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'],
          answer: 3,
          explanation: 'Bohr (1913) propuso que los electrones se mueven en \u00f3rbitas fijas (niveles de energ\u00eda) alrededor del n\u00facleo, y solo pueden saltar entre niveles absorbiendo o emitiendo energ\u00eda.'
        },
        {
          id: 9,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 tipo de enlace se forma entre un metal y un no metal?',
          options: ['Covalente', 'Met\u00e1lico', 'I\u00f3nico', 'Van der Waals'],
          answer: 2,
          explanation: 'El enlace i\u00f3nico se forma por transferencia de electrones del metal al no metal, generando iones con cargas opuestas que se atraen (ej.: Na\u207a + Cl\u207b = NaCl).'
        },
        {
          id: 10,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 grupo funcional caracteriza a los alcoholes?',
          options: ['\u2212COOH (carboxilo)', '\u2212OH (hidroxilo)', '\u2212NH\u2082 (amino)', 'C=O (carbonilo)'],
          answer: 1,
          explanation: 'El grupo hidroxilo (\u2212OH) es caracter\u00edstico de los alcoholes. Ejemplo: etanol (CH\u2083CH\u2082OH).'
        },
        {
          id: 11,
          type: 'multiple',
          stimulus: null,
          question: 'Seg\u00fan Darwin, la evoluci\u00f3n ocurre por:',
          options: [
            'Herencia de caracteres adquiridos.',
            'Selecci\u00f3n natural: los m\u00e1s aptos sobreviven y se reproducen.',
            'Mutaciones dirigidas por el ambiente.',
            'Voluntad de los organismos por adaptarse.'
          ],
          answer: 1,
          explanation: 'Darwin propuso que la selecci\u00f3n natural es el mecanismo de la evoluci\u00f3n: individuos con variaciones favorables tienen m\u00e1s probabilidades de sobrevivir y reproducirse.'
        },
        {
          id: 12,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 tipo de radiaci\u00f3n tiene el MAYOR poder de penetraci\u00f3n?',
          options: ['Alfa (\u03b1)', 'Beta (\u03b2)', 'Gamma (\u03b3)', 'Todas penetran igual'],
          answer: 2,
          explanation: 'La radiaci\u00f3n gamma (\u03b3) tiene el mayor poder de penetraci\u00f3n (se necesita plomo grueso o concreto para detenerla). Alfa es detenida por papel, beta por aluminio.'
        },
        {
          id: 13,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 principio explica por qu\u00e9 un barco de acero puede flotar?',
          options: [
            'Ley de Ohm',
            'Principio de Arqu\u00edmedes',
            'Ley de Faraday',
            'Principio de Pascal'
          ],
          answer: 1,
          explanation: 'El principio de Arqu\u00edmedes: el barco desplaza un volumen de agua cuyo peso es igual o mayor que el peso del barco. La forma del casco maximiza el volumen desplazado.'
        },
        {
          id: 14,
          type: 'open',
          stimulus: null,
          question: 'Explica la diferencia entre inmunidad innata e inmunidad adaptativa. Da un ejemplo de cada una.',
          options: null,
          answer: 'La inmunidad innata es la primera l\u00ednea de defensa, inespec\u00edfica (no distingue entre pat\u00f3genos). Ejemplos: piel, mucosas, fiebre, fag\u00f3citos. La inmunidad adaptativa es espec\u00edfica para cada pat\u00f3geno y genera memoria. Ejemplos: linfocitos B producen anticuerpos contra un virus espec\u00edfico; linfocitos T destruyen c\u00e9lulas infectadas.',
          explanation: 'La innata es r\u00e1pida pero no espec\u00edfica. La adaptativa es m\u00e1s lenta la primera vez, pero genera c\u00e9lulas de memoria que permiten una respuesta r\u00e1pida ante reinfecciones.'
        },
        {
          id: 15,
          type: 'open',
          stimulus: null,
          question: 'Compara los modelos at\u00f3micos de Thomson y Rutherford: \u00bfqu\u00e9 descubrimiento hizo que el modelo de Thomson fuera reemplazado?',
          options: null,
          answer: 'Thomson propuso el modelo de \u00abpud\u00edn de pasas\u00bb: una masa positiva con electrones incrustados. Rutherford, mediante su experimento de la l\u00e1mina de oro (1911), descubri\u00f3 que la mayor\u00eda de las part\u00edculas alfa atravesaban la l\u00e1mina y solo unas pocas rebotaban. Esto demostr\u00f3 que la carga positiva se concentra en un n\u00facleo peque\u00f1o y denso, rodeado de espacio vac\u00edo con electrones.',
          explanation: 'El experimento de Rutherford refut\u00f3 la distribuci\u00f3n uniforme de carga positiva de Thomson al demostrar la existencia de un n\u00facleo at\u00f3mico compacto.'
        },
        {
          id: 16,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l es la funci\u00f3n del fusible en un circuito el\u00e9ctrico?',
          options: [
            'Aumentar el voltaje del circuito.',
            'Almacenar energ\u00eda el\u00e9ctrica.',
            'Proteger el circuito cort\u00e1ndose si la corriente es excesiva.',
            'Convertir corriente alterna en continua.'
          ],
          answer: 2,
          explanation: 'El fusible es un elemento de protecci\u00f3n: se funde (se corta) cuando la corriente supera un l\u00edmite, interrumpiendo el circuito y previniendo da\u00f1os o incendios.'
        },
        {
          id: 17,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 gl\u00e1ndula es llamada \u00abgl\u00e1ndula maestra\u00bb del sistema endocrino?',
          options: ['Tiroides', 'P\u00e1ncreas', 'Hip\u00f3fisis (pituitaria)', 'Suprarrenal'],
          answer: 2,
          explanation: 'La hip\u00f3fisis o pituitaria es la \u00abgl\u00e1ndula maestra\u00bb porque produce hormonas que regulan la actividad de otras gl\u00e1ndulas (tiroides, suprarrenales, g\u00f3nadas).'
        }
      ]
    },

    // =====================================================================
    // 4. ESTUDIOS SOCIALES
    // =====================================================================
    {
      id: 'sociales',
      name: 'Estudios Sociales',
      icon: '🌍',
      color: '--c-sociales',
      sections: [
        {
          id: 'sociales-ww2',
          title: 'Segunda Guerra Mundial',
          content: `
<h4>Causas</h4>
<ul>
  <li>Consecuencias del <span class="highlight">Tratado de Versalles</span> (1919): humillaci&oacute;n y crisis econ&oacute;mica en Alemania.</li>
  <li>Ascenso de <span class="highlight">reg&iacute;menes totalitarios</span>: nazismo (Alemania), fascismo (Italia), militarismo (Jap&oacute;n).</li>
  <li>Pol&iacute;tica de <span class="highlight">apaciguamiento</span> de las democracias europeas.</li>
  <li>Expansionismo alem&aacute;n: anexi&oacute;n de Austria y los Sudetes, invasi&oacute;n de Polonia (1939).</li>
</ul>

<h4>Bandos</h4>
<table>
  <tr><th>Aliados</th><th>Eje</th></tr>
  <tr><td>Reino Unido, Francia, URSS, EE.UU., China</td><td>Alemania, Italia, Jap&oacute;n</td></tr>
</table>

<h4>Consecuencias</h4>
<ul>
  <li>M&aacute;s de 60 millones de muertos, incluyendo el <span class="highlight">Holocausto</span> (6 millones de jud&iacute;os).</li>
  <li>Destrucci&oacute;n masiva de Europa y Jap&oacute;n.</li>
  <li>Creaci&oacute;n de la <span class="highlight">ONU</span> (1945).</li>
  <li>Inicio de la <span class="highlight">Guerra Fr&iacute;a</span> (EE.UU. vs. URSS).</li>
  <li>Bombas at&oacute;micas sobre Hiroshima y Nagasaki.</li>
</ul>`
        },
        {
          id: 'sociales-fria',
          title: 'Guerra Fr\u00eda',
          content: `
<h4>Dos bloques enfrentados</h4>
<table>
  <tr><th>Bloque Occidental</th><th>Bloque Oriental</th></tr>
  <tr><td>L&iacute;der: <span class="highlight">EE.UU.</span></td><td>L&iacute;der: <span class="highlight">URSS</span></td></tr>
  <tr><td>Capitalismo, democracia liberal</td><td>Comunismo, partido &uacute;nico</td></tr>
  <tr><td>OTAN (alianza militar)</td><td>Pacto de Varsovia</td></tr>
  <tr><td>Plan Marshall (ayuda econ&oacute;mica)</td><td>COMECON (cooperaci&oacute;n econ&oacute;mica)</td></tr>
</table>

<h4>Caracter&iacute;sticas</h4>
<ul>
  <li><span class="highlight">No hubo enfrentamiento directo</span> entre EE.UU. y URSS (por eso &laquo;fr&iacute;a&raquo;).</li>
  <li><span class="highlight">Guerras proxy:</span> Corea (1950-53), Vietnam (1955-75), Afganist&aacute;n (1979-89).</li>
  <li><span class="highlight">Carrera armamentista:</span> acumulaci&oacute;n de armas nucleares.</li>
  <li><span class="highlight">Carrera espacial:</span> Sputnik (URSS, 1957), llegada a la Luna (EE.UU., 1969).</li>
  <li><span class="highlight">Muro de Berl&iacute;n</span> (1961-1989): s&iacute;mbolo de la divisi&oacute;n del mundo.</li>
</ul>`
        },
        {
          id: 'sociales-descolonizacion',
          title: 'Descolonizaci\u00f3n',
          content: `
<h4>Causas</h4>
<ul>
  <li>Debilitamiento de las potencias europeas tras la II Guerra Mundial.</li>
  <li>Movimientos <span class="highlight">nacionalistas</span> en Asia y &Aacute;frica.</li>
  <li>Apoyo de la ONU al derecho de <span class="highlight">autodeterminaci&oacute;n</span>.</li>
  <li>Presi&oacute;n de EE.UU. y URSS (ambos contra el colonialismo cl&aacute;sico, por distintas razones).</li>
</ul>

<h4>Ejemplos clave</h4>
<ul>
  <li><span class="highlight">India</span> (1947): independencia de Gran Breta&ntilde;a. L&iacute;der: Mahatma Gandhi (resistencia pac&iacute;fica).</li>
  <li><span class="highlight">Argelia</span> (1962): independencia de Francia tras guerra sangrienta.</li>
  <li><span class="highlight">&Aacute;frica subsahariana</span> (d&eacute;cadas 1950-60): independencia masiva de colonias brit&aacute;nicas, francesas y belgas.</li>
</ul>

<h4>Consecuencias</h4>
<ul>
  <li>Surgimiento de nuevos Estados independientes.</li>
  <li>Conflictos &eacute;tnicos y fronterizos (fronteras coloniales arbitrarias).</li>
  <li>Neocolonialismo: dependencia econ&oacute;mica de las ex-metr&oacute;polis.</li>
  <li>Movimiento de Pa&iacute;ses No Alineados.</li>
</ul>`
        },
        {
          id: 'sociales-onu',
          title: 'ONU',
          content: `
<h4>Creaci&oacute;n</h4>
<p>Fundada el <span class="highlight">24 de octubre de 1945</span>, tras la Segunda Guerra Mundial, para reemplazar a la fracasada Sociedad de Naciones.</p>

<h4>Prop&oacute;sitos</h4>
<ul>
  <li>Mantener la <span class="highlight">paz y seguridad</span> internacionales.</li>
  <li>Fomentar relaciones de <span class="highlight">cooperaci&oacute;n</span> entre naciones.</li>
  <li>Promover el respeto a los <span class="highlight">derechos humanos</span>.</li>
  <li>Impulsar el <span class="highlight">desarrollo econ&oacute;mico y social</span>.</li>
</ul>

<h4>&Oacute;rganos principales</h4>
<table>
  <tr><th>&Oacute;rgano</th><th>Funci&oacute;n</th></tr>
  <tr><td><span class="highlight">Asamblea General</span></td><td>Foro de todos los miembros (193). Cada pa&iacute;s = 1 voto. Recomendaciones.</td></tr>
  <tr><td><span class="highlight">Consejo de Seguridad</span></td><td>15 miembros (5 permanentes con veto: EE.UU., Rusia, China, Francia, Reino Unido). Decisiones vinculantes sobre paz.</td></tr>
  <tr><td><span class="highlight">Secretar&iacute;a General</span></td><td>Administra la ONU. Dirigida por el Secretario General.</td></tr>
  <tr><td><span class="highlight">Corte Internacional de Justicia</span></td><td>Resuelve disputas legales entre Estados. Sede en La Haya.</td></tr>
</table>`
        },
        {
          id: 'sociales-caida-socialismo',
          title: 'Ca\u00edda del socialismo',
          content: `
<h4>Reformas de Gorbachov (1985-1991)</h4>
<ul>
  <li><span class="highlight">Perestroika</span> (&laquo;reestructuraci&oacute;n&raquo;): reformas econ&oacute;micas para introducir elementos de mercado.</li>
  <li><span class="highlight">Gl&aacute;snost</span> (&laquo;transparencia&raquo;): apertura pol&iacute;tica y libertad de expresi&oacute;n.</li>
</ul>

<h4>Ca&iacute;da del Muro de Berl&iacute;n</h4>
<p><span class="highlight">9 de noviembre de 1989</span>: la apertura del Muro simboliz&oacute; el fin de la divisi&oacute;n europea. Alemania se reunific&oacute; en 1990.</p>

<h4>Disoluci&oacute;n de la URSS</h4>
<p>En <span class="highlight">diciembre de 1991</span>, la URSS se disolvi&oacute; en 15 rep&uacute;blicas independientes. Rusia se convirti&oacute; en la principal sucesora.</p>

<h4>Consecuencias</h4>
<ul>
  <li>Fin de la Guerra Fr&iacute;a y del mundo bipolar.</li>
  <li>EE.UU. como &uacute;nica superpotencia (unipolaridad temporal).</li>
  <li>Transici&oacute;n de pa&iacute;ses del Este hacia econom&iacute;as de mercado.</li>
  <li>Expansi&oacute;n de la Uni&oacute;n Europea y la OTAN hacia el este.</li>
</ul>`
        },
        {
          id: 'sociales-globalizacion',
          title: 'Globalizaci\u00f3n y tecnolog\u00eda',
          content: `
<h4>Definici&oacute;n</h4>
<p>La <span class="highlight">globalizaci&oacute;n</span> es el proceso de integraci&oacute;n econ&oacute;mica, cultural, tecnol&oacute;gica y social entre pa&iacute;ses a escala mundial.</p>

<h4>Dimensiones</h4>
<ul>
  <li><span class="highlight">Econ&oacute;mica:</span> libre comercio, inversiones internacionales, cadenas de producci&oacute;n globales.</li>
  <li><span class="highlight">Cultural:</span> difusi&oacute;n de valores, costumbres, m&uacute;sica, comida a nivel global.</li>
  <li><span class="highlight">Tecnol&oacute;gica:</span> internet, telecomunicaciones, redes sociales.</li>
  <li><span class="highlight">Pol&iacute;tica:</span> organismos internacionales, tratados multilaterales.</li>
</ul>

<h4>Factores que la impulsan</h4>
<ul>
  <li><span class="highlight">Internet y comunicaciones:</span> informaci&oacute;n instant&aacute;nea, redes sociales, comercio electr&oacute;nico.</li>
  <li><span class="highlight">Medios de comunicaci&oacute;n:</span> televisi&oacute;n, radio, prensa digital con alcance global.</li>
  <li><span class="highlight">Transporte:</span> aviaci&oacute;n comercial, contenedores, log&iacute;stica global.</li>
</ul>

<div class="key-concept">
  <strong>Debate:</strong> la globalizaci&oacute;n trae beneficios (acceso a productos, informaci&oacute;n, tecnolog&iacute;a) pero tambi&eacute;n desaf&iacute;os (desigualdad, p&eacute;rdida de identidad cultural, explotaci&oacute;n laboral).
</div>`
        },
        {
          id: 'sociales-economia-global',
          title: 'Econom\u00eda global',
          content: `
<h4>Empresas transnacionales</h4>
<p>Empresas que operan en m&uacute;ltiples pa&iacute;ses, con sede central en uno. Ejemplos: Apple, Samsung, Nestl&eacute;. Tienen gran poder econ&oacute;mico, a veces superior al PIB de naciones peque&ntilde;as.</p>

<h4>Organismos econ&oacute;micos internacionales</h4>
<table>
  <tr><th>Organismo</th><th>Funci&oacute;n</th></tr>
  <tr><td><span class="highlight">FMI</span> (Fondo Monetario Internacional)</td><td>Estabilidad financiera, pr&eacute;stamos a pa&iacute;ses en crisis</td></tr>
  <tr><td><span class="highlight">Banco Mundial</span></td><td>Financiamiento para desarrollo y reducci&oacute;n de pobreza</td></tr>
  <tr><td><span class="highlight">OMC</span> (Organizaci&oacute;n Mundial del Comercio)</td><td>Regula el comercio internacional, resuelve disputas</td></tr>
</table>

<h4>Bloques comerciales</h4>
<ul>
  <li><span class="highlight">Tratados de libre comercio (TLC):</span> acuerdos para reducir aranceles entre pa&iacute;ses.</li>
  <li><span class="highlight">Bloques regionales:</span> Uni&oacute;n Europea, Mercosur, Alianza del Pac&iacute;fico, APEC.</li>
</ul>`
        },
        {
          id: 'sociales-conceptos-eco',
          title: 'Conceptos econ\u00f3micos',
          content: `
<h4>Conceptos fundamentales</h4>
<table>
  <tr><th>Concepto</th><th>Definici&oacute;n</th></tr>
  <tr><td><span class="highlight">Trabajo</span></td><td>Actividad humana que genera bienes o servicios. Puede ser remunerado o no.</td></tr>
  <tr><td><span class="highlight">Empleo</span></td><td>Trabajo remunerado en el marco de una relaci&oacute;n laboral formal.</td></tr>
  <tr><td><span class="highlight">Producci&oacute;n</span></td><td>Proceso de crear bienes y servicios para satisfacer necesidades.</td></tr>
  <tr><td><span class="highlight">Mercado</span></td><td>Espacio (f&iacute;sico o virtual) donde se intercambian bienes/servicios por dinero.</td></tr>
  <tr><td><span class="highlight">Oferta y demanda</span></td><td>La oferta es la cantidad que los productores venden; la demanda, lo que los consumidores quieren comprar.</td></tr>
</table>

<h4>Otros conceptos clave</h4>
<ul>
  <li><span class="highlight">RSE (Responsabilidad Social Empresarial):</span> compromiso voluntario de las empresas con la sociedad y el medio ambiente.</li>
  <li><span class="highlight">Privatizaci&oacute;n:</span> transferencia de empresas o servicios del Estado al sector privado.</li>
  <li><span class="highlight">Propiedad p&uacute;blica:</span> bienes que pertenecen al Estado (hospitales p&uacute;blicos, parques).</li>
  <li><span class="highlight">Propiedad privada:</span> bienes que pertenecen a personas o empresas particulares.</li>
</ul>`
        },
        {
          id: 'sociales-poblacion',
          title: 'Poblaci\u00f3n y migraci\u00f3n',
          content: `
<h4>Factores de crecimiento poblacional</h4>
<ul>
  <li><span class="highlight">Natalidad:</span> n&uacute;mero de nacimientos.</li>
  <li><span class="highlight">Mortalidad:</span> n&uacute;mero de defunciones.</li>
  <li><span class="highlight">Migraci&oacute;n:</span> entrada (inmigraci&oacute;n) y salida (emigraci&oacute;n) de personas.</li>
</ul>

<h4>Fen&oacute;menos demogr&aacute;ficos</h4>
<ul>
  <li><span class="highlight">Explosi&oacute;n demogr&aacute;fica:</span> crecimiento acelerado de la poblaci&oacute;n, especialmente en pa&iacute;ses en desarrollo (siglo XX).</li>
  <li><span class="highlight">Envejecimiento poblacional:</span> aumento de la proporci&oacute;n de adultos mayores, com&uacute;n en pa&iacute;ses desarrollados. Desaf&iacute;os: pensiones, salud.</li>
  <li><span class="highlight">Transici&oacute;n demogr&aacute;fica:</span> paso de alta natalidad/mortalidad a baja natalidad/mortalidad.</li>
</ul>

<h4>Migraci&oacute;n</h4>
<ul>
  <li>Causas: b&uacute;squeda de empleo, conflictos, desastres naturales, reunificaci&oacute;n familiar.</li>
  <li>Efectos positivos: diversidad cultural, mano de obra, remesas.</li>
  <li>Efectos negativos: tensi&oacute;n social, explotaci&oacute;n laboral, fuga de cerebros en pa&iacute;s de origen.</li>
</ul>`
        },
        {
          id: 'sociales-urbanizacion',
          title: 'Urbanizaci\u00f3n',
          content: `
<h4>&Eacute;xodo rural</h4>
<p>Migraci&oacute;n masiva del campo a la ciudad en busca de empleo, educaci&oacute;n y servicios. En Chile y Am&eacute;rica Latina, se intensific&oacute; desde mediados del siglo XX.</p>

<h4>Urbanizaci&oacute;n en Chile</h4>
<ul>
  <li>Hoy, m&aacute;s del <span class="highlight">87%</span> de la poblaci&oacute;n chilena vive en zonas urbanas.</li>
  <li>Santiago concentra m&aacute;s del 40% de la poblaci&oacute;n nacional (macrocefalia urbana).</li>
</ul>

<h4>Problemas urbanos en Am&eacute;rica Latina</h4>
<ul>
  <li><span class="highlight">Hacinamiento</span> y viviendas precarias (campamentos, favelas).</li>
  <li><span class="highlight">Contaminaci&oacute;n</span> del aire, agua y suelo.</li>
  <li><span class="highlight">Congesti&oacute;n vehicular</span> y deficiencias en transporte p&uacute;blico.</li>
  <li><span class="highlight">Desigualdad territorial:</span> servicios concentrados en zonas ricas.</li>
  <li><span class="highlight">Inseguridad</span> y delincuencia urbana.</li>
</ul>

<h4>Impacto ambiental</h4>
<ul>
  <li>P&eacute;rdida de &aacute;reas verdes y suelos agr&iacute;colas.</li>
  <li>Aumento de residuos s&oacute;lidos y contaminaci&oacute;n.</li>
  <li>Islas de calor urbanas.</li>
</ul>`
        }
      ],
      questions: [
        {
          id: 1,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l fue una causa directa del inicio de la Segunda Guerra Mundial?',
          options: [
            'La ca\u00edda del Muro de Berl\u00edn.',
            'La invasi\u00f3n de Polonia por Alemania en 1939.',
            'La creaci\u00f3n de la ONU.',
            'El lanzamiento del Sputnik.'
          ],
          answer: 1,
          explanation: 'La invasi\u00f3n de Polonia por Alemania el 1 de septiembre de 1939 provoc\u00f3 que Francia y Reino Unido declararan la guerra a Alemania, iniciando la Segunda Guerra Mundial.'
        },
        {
          id: 2,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 caracter\u00edstica defini\u00f3 la Guerra Fr\u00eda?',
          options: [
            'Un enfrentamiento armado directo entre EE.UU. y la URSS.',
            'Una tensi\u00f3n geopolitica sin enfrentamiento directo entre las superpotencias.',
            'Una alianza militar entre EE.UU. y la URSS.',
            'La colonizaci\u00f3n de \u00c1frica por ambas superpotencias.'
          ],
          answer: 1,
          explanation: 'La Guerra Fr\u00eda se caracteriz\u00f3 por la tensi\u00f3n pol\u00edtica, militar e ideol\u00f3gica entre EE.UU. y la URSS sin enfrentamiento armado directo entre ambas. Los conflictos se libraron en guerras proxy (Corea, Vietnam, Afganist\u00e1n).'
        },
        {
          id: 3,
          type: 'multiple',
          stimulus: null,
          question: 'Ordena cronol\u00f3gicamente: 1) Ca\u00edda del Muro de Berl\u00edn, 2) Creaci\u00f3n de la ONU, 3) Disoluci\u00f3n de la URSS, 4) Inicio de la Guerra Fr\u00eda.',
          options: [
            '2 \u2192 4 \u2192 1 \u2192 3',
            '4 \u2192 2 \u2192 3 \u2192 1',
            '2 \u2192 4 \u2192 3 \u2192 1',
            '4 \u2192 2 \u2192 1 \u2192 3'
          ],
          answer: 0,
          explanation: 'ONU (1945) \u2192 Inicio Guerra Fr\u00eda (~1947) \u2192 Ca\u00edda del Muro (1989) \u2192 Disoluci\u00f3n de la URSS (1991).'
        },
        {
          id: 4,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 organismo de la ONU puede tomar decisiones vinculantes sobre paz y seguridad?',
          options: [
            'La Asamblea General',
            'El Consejo de Seguridad',
            'La Corte Internacional de Justicia',
            'La Secretar\u00eda General'
          ],
          answer: 1,
          explanation: 'El Consejo de Seguridad es el \u00fanico \u00f3rgano de la ONU con poder para tomar decisiones vinculantes (obligatorias) sobre paz y seguridad internacional. Tiene 5 miembros permanentes con derecho a veto.'
        },
        {
          id: 5,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 fue la Perestroika?',
          options: [
            'La pol\u00edtica de transparencia informativa de Gorbachov.',
            'La reestructuraci\u00f3n econ\u00f3mica de la URSS impulsada por Gorbachov.',
            'La alianza militar del bloque oriental.',
            'El plan de ayuda econ\u00f3mica de EE.UU. a Europa.'
          ],
          answer: 1,
          explanation: 'Perestroika (\u00abreestructuraci\u00f3n\u00bb) fue la reforma econ\u00f3mica de Gorbachov que busc\u00f3 introducir elementos de mercado en la econom\u00eda sovi\u00e9tica. La Gl\u00e1snost (\u00abtransparencia\u00bb) fue la apertura pol\u00edtica.'
        },
        {
          id: 6,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 es la globalizaci\u00f3n?',
          options: [
            'La expansi\u00f3n territorial de un pa\u00eds sobre otros.',
            'El proceso de integraci\u00f3n econ\u00f3mica, cultural y tecnol\u00f3gica a escala mundial.',
            'La creaci\u00f3n de un gobierno mundial \u00fanico.',
            'El aumento de la poblaci\u00f3n mundial.'
          ],
          answer: 1,
          explanation: 'La globalizaci\u00f3n es el proceso de creciente integraci\u00f3n entre pa\u00edses en lo econ\u00f3mico, cultural, tecnol\u00f3gico y social, facilitado por internet, comunicaciones y transporte.'
        },
        {
          id: 7,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l es la funci\u00f3n del FMI?',
          options: [
            'Regular el comercio internacional.',
            'Financiar proyectos de desarrollo y reducci\u00f3n de pobreza.',
            'Mantener la estabilidad financiera y prestar a pa\u00edses en crisis.',
            'Resolver disputas legales entre pa\u00edses.'
          ],
          answer: 2,
          explanation: 'El Fondo Monetario Internacional (FMI) busca la estabilidad del sistema financiero internacional y otorga pr\u00e9stamos a pa\u00edses con problemas de balanza de pagos. El Banco Mundial financia desarrollo, y la OMC regula el comercio.'
        },
        {
          id: 8,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l es la diferencia entre \u00abtrabajo\u00bb y \u00abempleo\u00bb?',
          options: [
            'No hay diferencia, son sin\u00f3nimos.',
            'El trabajo es cualquier actividad productiva; el empleo es trabajo remunerado formal.',
            'El empleo es voluntario y el trabajo es obligatorio.',
            'El trabajo es solo manual y el empleo es intelectual.'
          ],
          answer: 1,
          explanation: 'Trabajo es toda actividad humana que produce bienes o servicios (incluyendo dom\u00e9stico, voluntariado). Empleo es espec\u00edficamente trabajo remunerado en una relaci\u00f3n laboral formal.'
        },
        {
          id: 9,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 es la \u00abfuga de cerebros\u00bb?',
          options: [
            'La p\u00e9rdida de memoria por envejecimiento.',
            'La emigraci\u00f3n de profesionales calificados hacia pa\u00edses m\u00e1s desarrollados.',
            'La falta de educaci\u00f3n en zonas rurales.',
            'La automatizaci\u00f3n de trabajos intelectuales.'
          ],
          answer: 1,
          explanation: 'La \u00abfuga de cerebros\u00bb (brain drain) es la emigraci\u00f3n de personas con alta formaci\u00f3n acad\u00e9mica o profesional, lo que representa una p\u00e9rdida para el pa\u00eds de origen.'
        },
        {
          id: 10,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 porcentaje aproximado de la poblaci\u00f3n chilena vive en zonas urbanas?',
          options: ['50%', '67%', '75%', '87%'],
          answer: 3,
          explanation: 'Chile es uno de los pa\u00edses m\u00e1s urbanizados de Am\u00e9rica Latina, con m\u00e1s del 87% de su poblaci\u00f3n viviendo en zonas urbanas.'
        },
        {
          id: 11,
          type: 'open',
          stimulus: null,
          question: 'Explica dos consecuencias de la descolonizaci\u00f3n en \u00c1frica y Asia.',
          options: null,
          answer: '1) Surgimiento de nuevos Estados independientes, muchos con fronteras artificiales heredadas del colonialismo, lo que gener\u00f3 conflictos \u00e9tnicos internos. 2) Neocolonialismo: aunque pol\u00edticamente independientes, muchos pa\u00edses mantuvieron dependencia econ\u00f3mica de sus antiguas metr\u00f3polis a trav\u00e9s del comercio desigual y la deuda externa.',
          explanation: 'La descolonizaci\u00f3n liber\u00f3 pol\u00edticamente a los pueblos colonizados, pero las herencias del colonialismo (fronteras arbitrarias, dependencia econ\u00f3mica) generaron nuevos problemas.'
        },
        {
          id: 12,
          type: 'open',
          stimulus: null,
          question: '\u00bfQu\u00e9 es la Responsabilidad Social Empresarial (RSE)? Da un ejemplo.',
          options: null,
          answer: 'La RSE es el compromiso voluntario de las empresas de contribuir positivamente a la sociedad y al medio ambiente, m\u00e1s all\u00e1 de lo que la ley exige. Ejemplo: una empresa minera que financia la educaci\u00f3n en comunidades cercanas a sus operaciones, o una empresa que reduce sus emisiones de carbono m\u00e1s all\u00e1 de lo requerido legalmente.',
          explanation: 'La RSE va m\u00e1s all\u00e1 del cumplimiento legal: implica acciones voluntarias en \u00e1reas como medio ambiente, comunidad, trabajadores y \u00e9tica empresarial.'
        },
        {
          id: 13,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 se entiende por \u00abprivatizaci\u00f3n\u00bb?',
          options: [
            'La creaci\u00f3n de empresas p\u00fablicas.',
            'La transferencia de empresas o servicios del Estado al sector privado.',
            'La nacionalizaci\u00f3n de empresas extranjeras.',
            'La regulaci\u00f3n estatal del mercado.'
          ],
          answer: 1,
          explanation: 'Privatizar es transferir la propiedad o gesti\u00f3n de una empresa o servicio estatal al sector privado. Lo opuesto es la nacionalizaci\u00f3n.'
        },
        {
          id: 14,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l fue una causa de la descolonizaci\u00f3n?',
          options: [
            'El fortalecimiento de las potencias europeas tras la II Guerra Mundial.',
            'El debilitamiento de Europa y el surgimiento de movimientos nacionalistas en Asia y \u00c1frica.',
            'El inicio de la carrera espacial.',
            'La fundaci\u00f3n del Banco Mundial.'
          ],
          answer: 1,
          explanation: 'Las potencias europeas salieron debilitadas de la II Guerra Mundial y ya no pod\u00edan sostener sus imperios coloniales. Simult\u00e1neamente, movimientos nacionalistas locales exigieron independencia.'
        },
        {
          id: 15,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfCu\u00e1l es un problema asociado a la urbanizaci\u00f3n acelerada en Am\u00e9rica Latina?',
          options: [
            'Disminuci\u00f3n de la poblaci\u00f3n.',
            'Exceso de \u00e1reas verdes en las ciudades.',
            'Hacinamiento, viviendas precarias y contaminaci\u00f3n.',
            'Despoblamiento de las ciudades.'
          ],
          answer: 2,
          explanation: 'La urbanizaci\u00f3n acelerada en Am\u00e9rica Latina ha generado problemas como hacinamiento, campamentos/asentamientos informales, contaminaci\u00f3n, congesti\u00f3n y desigualdad territorial.'
        },
        {
          id: 16,
          type: 'multiple',
          stimulus: null,
          question: '\u00bfQu\u00e9 bloque comercial integra a pa\u00edses de Am\u00e9rica del Sur como Argentina, Brasil, Paraguay y Uruguay?',
          options: ['OTAN', 'APEC', 'Mercosur', 'Uni\u00f3n Europea'],
          answer: 2,
          explanation: 'El Mercosur (Mercado Com\u00fan del Sur) es un bloque comercial sudamericano fundado en 1991. OTAN es una alianza militar, APEC es econ\u00f3mico del Pac\u00edfico, y la UE es europea.'
        }
      ]
    },

    // =====================================================================
    // 5. INGL\u00c9S
    // =====================================================================
    {
      id: 'ingles',
      name: 'Ingl\u00e9s',
      icon: '🇬🇧',
      color: '--c-ingles',
      sections: [
        {
          id: 'ingles-tenses',
          title: 'Verb tenses',
          content: `
<h4>Simple Present</h4>
<p>Se usa para <span class="highlight">rutinas, hechos generales y verdades cient&iacute;ficas</span>.</p>
<p>Estructura: Sujeto + verbo base (+ <em>-s</em> en 3&ordf; persona singular).</p>
<ul>
  <li><em>She <strong>works</strong> every day.</em></li>
  <li><em>Water <strong>boils</strong> at 100&deg;C.</em></li>
</ul>
<p><strong>Palabras clave:</strong> always, usually, often, sometimes, never, every day/week/month.</p>

<h4>Simple Past</h4>
<p>Se usa para <span class="highlight">acciones completadas en el pasado</span>.</p>
<p>Estructura: Sujeto + verbo en pasado (<em>-ed</em> para regulares, formas irregulares).</p>
<ul>
  <li><em>I <strong>visited</strong> Santiago last year.</em></li>
  <li><em>She <strong>went</strong> to the park yesterday.</em></li>
</ul>
<p><strong>Palabras clave:</strong> yesterday, last week/month/year, ago, in 2020.</p>

<h4>Present Perfect</h4>
<p>Se usa para <span class="highlight">acciones pasadas con relevancia en el presente</span>, o experiencias de vida.</p>
<p>Estructura: Sujeto + <em>have/has</em> + participio pasado.</p>
<ul>
  <li><em>I <strong>have visited</strong> three countries.</em> (experiencia)</li>
  <li><em>She <strong>has already finished</strong> her homework.</em> (acci&oacute;n reciente con resultado actual)</li>
</ul>
<p><strong>Palabras clave:</strong> just, already, yet, ever, never, since, for, recently.</p>

<div class="key-concept">
  <strong>Diferencia clave:</strong> <em>&ldquo;I lost my keys&rdquo;</em> (Simple Past: se perdieron, puede que ya las encontr&eacute;) vs. <em>&ldquo;I have lost my keys&rdquo;</em> (Present Perfect: todav&iacute;a no las encuentro, el efecto contin&uacute;a).
</div>`
        },
        {
          id: 'ingles-passive',
          title: 'Passive voice',
          content: `
<h4>Estructura</h4>
<p><span class="highlight">Sujeto + verbo <em>to be</em> (conjugado) + participio pasado</span></p>

<h4>Ejemplos por tiempo verbal</h4>
<table>
  <tr><th>Tiempo</th><th>Activa</th><th>Pasiva</th></tr>
  <tr><td>Simple Present</td><td>They <strong>make</strong> cars in Japan.</td><td>Cars <strong>are made</strong> in Japan.</td></tr>
  <tr><td>Simple Past</td><td>Edison <strong>invented</strong> the lightbulb.</td><td>The lightbulb <strong>was invented</strong> by Edison.</td></tr>
  <tr><td>Present Perfect</td><td>They <strong>have repaired</strong> the road.</td><td>The road <strong>has been repaired</strong>.</td></tr>
</table>

<h4>&iquest;Cu&aacute;ndo se usa?</h4>
<ul>
  <li>Cuando el agente (quien hace la acci&oacute;n) es <strong>desconocido o irrelevante</strong>.</li>
  <li>En textos <strong>cient&iacute;ficos, instructivos o formales</strong>.</li>
  <li>Cuando el foco est&aacute; en la <strong>acci&oacute;n o el objeto</strong>, no en quien la realiza.</li>
</ul>

<div class="key-concept">
  <strong>Pista:</strong> si ves <em>by + agente</em> (<em>&ldquo;by Edison&rdquo;</em>), es probablemente voz pasiva. Pero <em>by</em> no siempre aparece.
</div>`
        },
        {
          id: 'ingles-modals',
          title: 'Modal verbs',
          content: `
<h4>Verbos modales y sus significados</h4>
<table>
  <tr><th>Modal</th><th>Significado</th><th>Ejemplo</th></tr>
  <tr><td><span class="highlight">can</span></td><td>Habilidad, permiso</td><td><em>She <strong>can</strong> speak French.</em></td></tr>
  <tr><td><span class="highlight">could</span></td><td>Habilidad pasada, posibilidad, petici&oacute;n cort&eacute;s</td><td><em><strong>Could</strong> you help me?</em></td></tr>
  <tr><td><span class="highlight">may</span></td><td>Permiso formal, posibilidad</td><td><em>It <strong>may</strong> rain tomorrow.</em></td></tr>
  <tr><td><span class="highlight">might</span></td><td>Posibilidad menor</td><td><em>He <strong>might</strong> come later.</em></td></tr>
  <tr><td><span class="highlight">must</span></td><td>Obligaci&oacute;n, deducci&oacute;n fuerte</td><td><em>You <strong>must</strong> wear a helmet.</em></td></tr>
  <tr><td><span class="highlight">should</span></td><td>Consejo, recomendaci&oacute;n</td><td><em>You <strong>should</strong> study more.</em></td></tr>
  <tr><td><span class="highlight">would</span></td><td>Condicional, petici&oacute;n cort&eacute;s</td><td><em><strong>Would</strong> you like some coffee?</em></td></tr>
  <tr><td><span class="highlight">ought to</span></td><td>Deber moral, similar a should</td><td><em>We <strong>ought to</strong> respect others.</em></td></tr>
</table>

<div class="key-concept">
  <strong>Regla:</strong> los modales <strong>no llevan <em>-s</em></strong> en tercera persona, <strong>no usan <em>do/does</em></strong> para preguntas, y van seguidos de <strong>verbo en forma base</strong> (sin <em>to</em>, excepto <em>ought to</em>).
</div>`
        },
        {
          id: 'ingles-imperatives',
          title: 'Imperatives',
          content: `
<h4>Estructura</h4>
<p><span class="highlight">Afirmativo:</span> Verbo base (sin sujeto). <em>Open the door. Turn off the machine.</em></p>
<p><span class="highlight">Negativo:</span> <em>Do not</em> (Don't) + verbo base. <em>Do not touch. Don't run.</em></p>

<h4>Usos comunes</h4>
<ul>
  <li><strong>Instrucciones:</strong> <em>Press the button. Insert the card.</em></li>
  <li><strong>Manuales de seguridad:</strong> <em>Do not operate without safety gear. Keep away from children.</em></li>
  <li><strong>Se&ntilde;ales:</strong> <em>Stop. Exit here. Do not enter.</em></li>
  <li><strong>&Oacute;rdenes:</strong> <em>Sit down. Be quiet.</em></li>
</ul>

<div class="key-concept">
  <strong>En la prueba:</strong> los imperativos son muy frecuentes en textos instructivos (manuales, recetas, gu&iacute;as de seguridad). Identificarlos te ayuda a reconocer el tipo de texto.
</div>`
        },
        {
          id: 'ingles-adverbs',
          title: 'Adverbs',
          content: `
<h4>Adverbios de frecuencia</h4>
<p>Indican con qu&eacute; frecuencia ocurre algo. Se ubican antes del verbo principal o despu&eacute;s de <em>be</em>.</p>
<table>
  <tr><th>Adverb</th><th>Significado</th><th>Ejemplo</th></tr>
  <tr><td>always</td><td>siempre</td><td><em>She <strong>always</strong> arrives on time.</em></td></tr>
  <tr><td>usually</td><td>generalmente</td><td><em>I <strong>usually</strong> walk to school.</em></td></tr>
  <tr><td>often</td><td>a menudo</td><td><em>They <strong>often</strong> travel.</em></td></tr>
  <tr><td>sometimes</td><td>a veces</td><td><em>He <strong>sometimes</strong> forgets.</em></td></tr>
  <tr><td>never</td><td>nunca</td><td><em>I <strong>never</strong> smoke.</em></td></tr>
</table>

<h4>Adverbios usados con Present Perfect</h4>
<ul>
  <li><span class="highlight">just</span> (reci&eacute;n): <em>I have <strong>just</strong> arrived.</em></li>
  <li><span class="highlight">already</span> (ya): <em>She has <strong>already</strong> eaten.</em></li>
  <li><span class="highlight">yet</span> (todav&iacute;a/ya &mdash; en negativas y preguntas): <em>Have you finished <strong>yet</strong>?</em></li>
  <li><span class="highlight">ever</span> (alguna vez): <em>Have you <strong>ever</strong> been to London?</em></li>
  <li><span class="highlight">still</span> (todav&iacute;a &mdash; acci&oacute;n que contin&uacute;a): <em>He <strong>still</strong> hasn't called.</em></li>
</ul>

<h4>Adverbios de modo</h4>
<p>Describen c&oacute;mo se realiza una acci&oacute;n. Muchos terminan en <em>-ly</em>:</p>
<p><em>widely</em> (ampliamente), <em>only</em> (solo/solamente), <em>electrically</em> (el&eacute;ctricamente), <em>carefully</em> (cuidadosamente).</p>`
        },
        {
          id: 'ingles-connectors',
          title: 'Connectors',
          content: `
<h4>Tipos de conectores</h4>
<table>
  <tr><th>Funci&oacute;n</th><th>Conectores</th><th>Ejemplo</th></tr>
  <tr><td><span class="highlight">Adici&oacute;n</span></td><td>and, also, moreover, furthermore, in addition</td><td><em>He speaks English. <strong>Moreover</strong>, he speaks French.</em></td></tr>
  <tr><td><span class="highlight">Contraste</span></td><td>but, however, although, nevertheless, on the other hand</td><td><em>It was cold; <strong>however</strong>, we went out.</em></td></tr>
  <tr><td><span class="highlight">Causa</span></td><td>because, since, due to, as</td><td><em>He stayed home <strong>because</strong> he was sick.</em></td></tr>
  <tr><td><span class="highlight">Consecuencia</span></td><td>so, therefore, consequently, as a result</td><td><em>It rained, <strong>so</strong> the match was cancelled.</em></td></tr>
  <tr><td><span class="highlight">Prop&oacute;sito</span></td><td>to, in order to, so that</td><td><em>She studies <strong>in order to</strong> pass the exam.</em></td></tr>
  <tr><td><span class="highlight">Ejemplo</span></td><td>for example, for instance, such as</td><td><em>Some fruits, <strong>such as</strong> apples, are healthy.</em></td></tr>
  <tr><td><span class="highlight">Secuencia</span></td><td>first, then, next, finally, after that</td><td><em><strong>First</strong>, turn on the machine. <strong>Then</strong>, press start.</em></td></tr>
</table>

<div class="key-concept">
  <strong>En la prueba:</strong> los conectores ayudan a entender la relaci&oacute;n entre ideas. Si ves <em>however</em>, espera una idea contraria. Si ves <em>therefore</em>, espera una conclusi&oacute;n.
</div>`
        },
        {
          id: 'ingles-prepositions',
          title: 'Prepositions',
          content: `
<h4>Preposiciones de lugar</h4>
<table>
  <tr><th>Preposition</th><th>Significado</th><th>Ejemplo</th></tr>
  <tr><td>in</td><td>dentro de</td><td><em>The keys are <strong>in</strong> the drawer.</em></td></tr>
  <tr><td>on</td><td>sobre (superficie)</td><td><em>The book is <strong>on</strong> the table.</em></td></tr>
  <tr><td>under</td><td>debajo de</td><td><em>The cat is <strong>under</strong> the bed.</em></td></tr>
  <tr><td>over / above</td><td>encima de (sin contacto)</td><td><em>The lamp hangs <strong>over</strong> the table.</em></td></tr>
  <tr><td>below</td><td>por debajo (sin contacto)</td><td><em>The temperature dropped <strong>below</strong> zero.</em></td></tr>
  <tr><td>next to / beside</td><td>al lado de</td><td><em>She sat <strong>next to</strong> me.</em></td></tr>
  <tr><td>around</td><td>alrededor de</td><td><em>Trees grow <strong>around</strong> the lake.</em></td></tr>
  <tr><td>across</td><td>al otro lado de / a trav&eacute;s</td><td><em>The store is <strong>across</strong> the street.</em></td></tr>
</table>

<h4>Preposiciones de tiempo y otras</h4>
<table>
  <tr><th>Preposition</th><th>Uso</th><th>Ejemplo</th></tr>
  <tr><td>since</td><td>desde (punto en el tiempo)</td><td><em>I have lived here <strong>since</strong> 2010.</em></td></tr>
  <tr><td>for</td><td>durante (duraci&oacute;n)</td><td><em>I have studied <strong>for</strong> two hours.</em></td></tr>
  <tr><td>by</td><td>por / mediante / antes de</td><td><em>The report was written <strong>by</strong> the team.</em></td></tr>
  <tr><td>among</td><td>entre (3 o m&aacute;s)</td><td><em>She stood <strong>among</strong> the crowd.</em></td></tr>
  <tr><td>from...to</td><td>de...a</td><td><em>We work <strong>from</strong> 9 <strong>to</strong> 5.</em></td></tr>
</table>`
        },
        {
          id: 'ingles-affixes',
          title: 'Prefixes and suffixes',
          content: `
<h4>Prefijos comunes</h4>
<table>
  <tr><th>Prefijo</th><th>Significado</th><th>Ejemplo</th></tr>
  <tr><td><span class="highlight">re-</span></td><td>otra vez</td><td>rewrite, redo, rebuild</td></tr>
  <tr><td><span class="highlight">un-</span></td><td>no, lo contrario</td><td>unhappy, unusual, unfair</td></tr>
  <tr><td><span class="highlight">dis-</span></td><td>no, lo opuesto</td><td>disagree, disappear, disconnect</td></tr>
  <tr><td><span class="highlight">pre-</span></td><td>antes</td><td>preview, prepay, prehistoric</td></tr>
  <tr><td><span class="highlight">mis-</span></td><td>mal, err&oacute;neamente</td><td>misunderstand, misspell, mislead</td></tr>
  <tr><td><span class="highlight">over-</span></td><td>exceso, demasiado</td><td>overwork, overeat, overcome</td></tr>
</table>

<h4>Sufijos comunes</h4>
<table>
  <tr><th>Sufijo</th><th>Forma</th><th>Ejemplo</th></tr>
  <tr><td><span class="highlight">-ful</span></td><td>Adjetivo (lleno de)</td><td>careful, beautiful, useful</td></tr>
  <tr><td><span class="highlight">-less</span></td><td>Adjetivo (sin)</td><td>homeless, careless, useless</td></tr>
  <tr><td><span class="highlight">-tion / -sion</span></td><td>Sustantivo</td><td>education, decision, information</td></tr>
  <tr><td><span class="highlight">-ly</span></td><td>Adverbio</td><td>quickly, carefully, slowly</td></tr>
  <tr><td><span class="highlight">-ment</span></td><td>Sustantivo</td><td>development, agreement, movement</td></tr>
  <tr><td><span class="highlight">-ness</span></td><td>Sustantivo</td><td>happiness, darkness, kindness</td></tr>
  <tr><td><span class="highlight">-able / -ible</span></td><td>Adjetivo (que se puede)</td><td>readable, possible, comfortable</td></tr>
</table>

<div class="key-concept">
  <strong>Estrategia:</strong> si no conoces una palabra, intenta separar el prefijo o sufijo de la ra&iacute;z. <em>Un-comfort-able</em> = no + comodidad + que se puede = no c&oacute;modo (inc&oacute;modo).
</div>`
        },
        {
          id: 'ingles-phrases',
          title: 'Nominal and verbal phrases',
          content: `
<h4>Frases nominales (Noun phrases)</h4>
<p>Un grupo de palabras cuyo n&uacute;cleo es un <span class="highlight">sustantivo</span>, acompa&ntilde;ado de modificadores:</p>
<ul>
  <li><em>The <strong>old red car</strong></em> (art&iacute;culo + adjetivos + sustantivo)</li>
  <li><em>A <strong>very interesting book about history</strong></em></li>
  <li><em><strong>My brother's new computer</strong></em></li>
</ul>
<p>Estructura t&iacute;pica: determinante + adjetivo(s) + sustantivo + complemento</p>

<h4>Frases verbales (Verb phrases)</h4>
<p>Un grupo de palabras cuyo n&uacute;cleo es un <span class="highlight">verbo</span>, incluyendo auxiliares y complementos:</p>
<ul>
  <li><em>She <strong>has been working</strong> all day.</em></li>
  <li><em>They <strong>will have finished</strong> by tomorrow.</em></li>
  <li><em>He <strong>can speak</strong> three languages.</em></li>
</ul>
<p>Estructura t&iacute;pica: auxiliar(es) + verbo principal</p>

<div class="key-concept">
  <strong>En la prueba:</strong> identificar el n&uacute;cleo de la frase (sustantivo o verbo) te ayuda a entender la estructura de oraciones largas. El n&uacute;cleo es la palabra imprescindible.
</div>`
        }
      ],
      questions: [
        {
          id: 1,
          type: 'multiple',
          stimulus: '<p><em>Read the following safety instructions:</em></p><p>&ldquo;<strong>WARNING:</strong> Do not operate this machine without safety goggles. Always turn off the power before cleaning. Keep hands away from moving parts. If the machine overheats, unplug it immediately and contact technical support.&rdquo;</p>',
          question: 'What type of text is this?',
          options: ['A news article', 'A personal letter', 'A safety manual / instructions', 'A literary story'],
          answer: 2,
          explanation: 'Es un manual de seguridad / instrucciones. Se identifica por el uso de imperativos (do not operate, turn off, keep, unplug, contact) y vocabulario t\u00e9cnico de seguridad (safety goggles, overheats).'
        },
        {
          id: 2,
          type: 'multiple',
          stimulus: '<p><em>Read the following safety instructions:</em></p><p>&ldquo;<strong>WARNING:</strong> Do not operate this machine without safety goggles. Always turn off the power before cleaning. Keep hands away from moving parts. If the machine overheats, unplug it immediately and contact technical support.&rdquo;</p>',
          question: 'What should you do if the machine overheats?',
          options: [
            'Continue using it carefully.',
            'Turn off the power and clean it.',
            'Unplug it immediately and contact technical support.',
            'Put on safety goggles and restart.'
          ],
          answer: 2,
          explanation: 'El texto dice expl\u00edcitamente: \u201cIf the machine overheats, unplug it immediately and contact technical support.\u201d'
        },
        {
          id: 3,
          type: 'multiple',
          stimulus: null,
          question: 'Choose the correct verb tense: "She _____ to Paris three times so far."',
          options: ['went', 'has gone', 'goes', 'is going'],
          answer: 1,
          explanation: 'Se usa Present Perfect (has gone) porque \u201cso far\u201d indica una experiencia acumulada hasta el presente. \u201cSo far\u201d, \u201cever\u201d, \u201cnever\u201d y \u201calready\u201d son pistas del Present Perfect.'
        },
        {
          id: 4,
          type: 'multiple',
          stimulus: null,
          question: 'Which sentence is in PASSIVE VOICE?',
          options: [
            'The students finished the project.',
            'The project was finished by the students.',
            'The students are finishing the project.',
            'The students will finish the project.'
          ],
          answer: 1,
          explanation: 'La voz pasiva tiene la estructura: sujeto (que recibe la acci\u00f3n) + to be + participio pasado. \u201cThe project was finished by the students\u201d cumple esta estructura.'
        },
        {
          id: 5,
          type: 'multiple',
          stimulus: null,
          question: 'What does "must" express in the sentence: "You must wear a seatbelt"?',
          options: ['Ability', 'Possibility', 'Obligation', 'Permission'],
          answer: 2,
          explanation: '\u201cMust\u201d expresa obligaci\u00f3n (es obligatorio usar cintur\u00f3n). Tambi\u00e9n puede expresar deducci\u00f3n fuerte (\u201cHe must be tired\u201d = debe estar cansado), pero en este contexto es obligaci\u00f3n.'
        },
        {
          id: 6,
          type: 'multiple',
          stimulus: null,
          question: 'The word "unhappy" has the prefix "un-". What does it mean?',
          options: ['Very happy', 'Not happy', 'Happy again', 'Extremely happy'],
          answer: 1,
          explanation: 'El prefijo \u201cun-\u201d significa \u201cno\u201d o \u201clo contrario de\u201d. Unhappy = no feliz = infeliz.'
        },
        {
          id: 7,
          type: 'multiple',
          stimulus: '<p><em>&ldquo;Global warming is a serious threat to the planet. <strong>However</strong>, many countries still depend heavily on fossil fuels. <strong>Therefore</strong>, international cooperation is essential to reduce carbon emissions.&rdquo;</em></p>',
          question: 'What function does "however" serve in this text?',
          options: ['It adds more information.', 'It shows cause.', 'It introduces a contrasting idea.', 'It gives an example.'],
          answer: 2,
          explanation: '\u201cHowever\u201d es un conector de contraste. Introduce una idea que se opone o contrasta con la anterior (el calentamiento es una amenaza PERO los pa\u00edses siguen usando combustibles f\u00f3siles).'
        },
        {
          id: 8,
          type: 'multiple',
          stimulus: null,
          question: '"I have lived here _____ 2015." Choose the correct preposition.',
          options: ['for', 'since', 'during', 'at'],
          answer: 1,
          explanation: '\u201cSince\u201d se usa con un punto espec\u00edfico en el tiempo (2015). \u201cFor\u201d se usa con duraciones (for 10 years). Ambos suelen aparecer con Present Perfect.'
        },
        {
          id: 9,
          type: 'multiple',
          stimulus: null,
          question: 'What part of speech does the suffix "-ment" create?',
          options: ['Adjective', 'Verb', 'Noun', 'Adverb'],
          answer: 2,
          explanation: 'El sufijo \u201c-ment\u201d convierte un verbo en sustantivo: develop \u2192 development, agree \u2192 agreement, move \u2192 movement.'
        },
        {
          id: 10,
          type: 'multiple',
          stimulus: '<p><em>&ldquo;Solar energy is <strong>widely</strong> used in many countries. It is a clean and renewable source of power. <strong>Although</strong> the initial cost of solar panels is high, the long-term savings are significant.&rdquo;</em></p>',
          question: 'What is the main idea of this text?',
          options: [
            'Solar panels are too expensive.',
            'Solar energy is widely used and offers long-term savings despite high initial cost.',
            'Many countries reject solar energy.',
            'Renewable energy is not popular.'
          ],
          answer: 1,
          explanation: 'La idea principal es que la energ\u00eda solar est\u00e1 ampliamente usada y, aunque es cara al inicio, genera ahorros a largo plazo. El conector \u201calthough\u201d introduce la concesi\u00f3n (costo alto) sin negar la idea central.'
        },
        {
          id: 11,
          type: 'multiple',
          stimulus: null,
          question: '"She _____ play the piano when she was five." Choose the correct modal.',
          options: ['can', 'could', 'must', 'should'],
          answer: 1,
          explanation: '\u201cCould\u201d expresa habilidad en el pasado (\u201cwhen she was five\u201d marca tiempo pasado). \u201cCan\u201d es habilidad en presente.'
        },
        {
          id: 12,
          type: 'multiple',
          stimulus: null,
          question: 'Identify the verbal phrase in: "They have been studying for three hours."',
          options: [
            'They',
            'have been studying',
            'for three hours',
            'three hours'
          ],
          answer: 1,
          explanation: '\u201cHave been studying\u201d es la frase verbal: contiene auxiliares (have, been) + verbo principal (studying). Es Present Perfect Continuous.'
        },
        {
          id: 13,
          type: 'multiple',
          stimulus: null,
          question: '"The report was completed yesterday." What tense is used here?',
          options: ['Simple Present Passive', 'Simple Past Passive', 'Present Perfect Passive', 'Future Passive'],
          answer: 1,
          explanation: '\u201cWas completed\u201d = was (Simple Past de \u201cbe\u201d) + completed (participio pasado). El marcador temporal \u201cyesterday\u201d confirma que es Simple Past Passive.'
        },
        {
          id: 14,
          type: 'open',
          stimulus: '<p><em>&ldquo;Electric cars are becoming increasingly popular around the world. <strong>For example</strong>, in Norway, more than 80% of new car sales are electric. <strong>Although</strong> electric vehicles are more expensive than traditional cars, they are cheaper to maintain <strong>because</strong> they have fewer moving parts. <strong>Moreover</strong>, they produce zero emissions, which helps reduce air pollution in cities.&rdquo;</em></p>',
          question: 'Identifica los cuatro conectores del texto, indica su funci\u00f3n (adici\u00f3n, contraste, causa, ejemplo) y explica la idea principal.',
          options: null,
          answer: 'Conectores: 1) "For example" = ejemplo (introduce el caso de Noruega). 2) "Although" = contraste (concede que son m\u00e1s caros). 3) "because" = causa (explica por qu\u00e9 son m\u00e1s baratos de mantener). 4) "Moreover" = adici\u00f3n (agrega el beneficio de cero emisiones). Idea principal: los autos el\u00e9ctricos son cada vez m\u00e1s populares por sus ventajas de mantenimiento y ambientales, a pesar de su mayor costo inicial.',
          explanation: 'Cada conector cumple una funci\u00f3n l\u00f3gica espec\u00edfica que organiza las ideas del texto. Reconocerlos facilita la comprensi\u00f3n lectora.'
        },
        {
          id: 15,
          type: 'multiple',
          stimulus: null,
          question: 'What does the prefix "re-" mean in "rewrite"?',
          options: ['Not', 'Before', 'Again', 'Too much'],
          answer: 2,
          explanation: 'El prefijo \u201cre-\u201d significa \u201cotra vez\u201d o \u201cde nuevo\u201d. Rewrite = escribir otra vez. Rebuild = construir de nuevo.'
        },
        {
          id: 16,
          type: 'multiple',
          stimulus: null,
          question: '"Have you _____ been to Japan?" Choose the correct adverb.',
          options: ['just', 'already', 'ever', 'yet'],
          answer: 2,
          explanation: '\u201cEver\u201d se usa en preguntas con Present Perfect para preguntar sobre experiencias de vida (\u00bfalguna vez has...?). \u201cJust\u201d = reci\u00e9n, \u201calready\u201d = ya (afirmativas), \u201cyet\u201d = todav\u00eda (negativas/preguntas).'
        },
        {
          id: 17,
          type: 'multiple',
          stimulus: null,
          question: 'In "careful", the suffix "-ful" means:',
          options: ['Without', 'Full of', 'Again', 'Not'],
          answer: 1,
          explanation: 'El sufijo \u201c-ful\u201d significa \u201clleno de\u201d. Careful = lleno de cuidado. Beautiful = lleno de belleza. Su opuesto es \u201c-less\u201d (careless = sin cuidado).'
        }
      ]
    }
  ]
};
