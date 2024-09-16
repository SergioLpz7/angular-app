import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private _datos = {
    numero: '626 60 69 01',
    email: 'tamaraguillen@eiblittlerainbows.es',
    lugar: 'C. del Pino Canario, 4 Navalcarnero',
    horario: 'De 6:30 a 19:00 de lunes a viernes',
    instagram: 'https://www.instagram.com/eib.littlerainbows/',
    tiktok: 'https://www.tiktok.com/@eib.little.rainbo?_t=8pYD0B4b7aK&_r=1',
  };

  private _metodologia = {
    metodologia: {
      title: 'Metodología',
      image: 'Ayla_Libro.jpg',
      informacion: `Un espacio en el que la enseñanza va más allá del aprendizaje académico.
          Nuestra línea pedagógica se basa en la <b>crianza respetuosa</b> y en la
          teoría de grandes autores como María <b>Montessori</b>, Emmi
          <b>Pikler</b> y la pedagogía <b>Waldorf</b>. <br />
          <br />
          Para nosotros, cada niño es único y merece un trato personalizado que le
          permita desarrollar su <b>máximo potencial</b>. Creemos en un enfoque
          educativo <b>integral</b> que atienda a todos los aspectos del
          desarrollo infantil: físico, emocional, social y cognitivo. Aplicamos
          principios de <b>crianza respetuosa</b> para fomentar la confianza, la
          autonomía yel respeto mutuo. <br />
          <br />
          En nuestra escuela, los niños aprenden a través de la
          <b>exploración libre</b> y guiada, y siempre respetando sus propios
          ritmos y necesidades. Inspirados en los grandes pedagogos, aplicamos
          <b>métodos innovadores</b> que combinan la teoría y la práctica, como el
          juego, la música, la psicomotricidad y el arte. Además, nos enfocamos en
          el aprendizaje basado en la <b>experiencia</b> y en el
          <b>vínculo afectivo</b> conlos educadores. <br />
          <br />
          En nuestro centro, buscamos crear un <b>entorno seguro</b>, amoroso y
          lleno de <b>oportunidades</b> para que los niños puedan crecer y
          desarrollarse de manera saludable y armónica.`,
    },
    ingles: {
      title: 'Inglés',
      image: 'Ingles.jpg',
      informacion: `Nuestra escuela es <b>bilingüe</b>, contamos con profesoras
          especializadas en educación infantil con un <b>alto nivel</b> de inglés,
          que coordinan el proceso de <b>inmersión lingüística</b> en los
          diferentes niveles educativos del centro y que hablan exclusivamente en
          inglés durante el momento de la asamblea a partir del primer año. <br />
          <br />
          El objetivo es iniciar a los niños en el idioma por todas las
          <b>ventajas</b> que esta iniciación supone, pero siempre desde el juego
          y <b>educando</b> poco a poco el oído de los pequeños con canciones,
          imágenes, dibujos que les permitan asimilar conceptos y sonidos de una
          manera sutil y progresiva.`,
    },
    psicomotricidad: {
      title: 'Psicomotricidad',
      image: 'escalar.jpg',
      informacion: `Los juegos y actividades que implican <b>moverse</b> y
          <b>controlar</b> mejor su cuerpo no solo ayudan a mejorar el
          <b>equilibrio</b>, la postura y la <b>conciencia corporal</b>, sino
          también a entender el espacio que los rodea. <br /><br />
          Además, estas actividades hacen que los niños conecten emocionalmente
          con el espacio, los objetos y las personas a su alrededor,
          descubriéndose a sí mismos. Por eso, son <b>clave</b> en todas las
          etapas de nuestra escuela.`,
    },
    estimulacion: {
      title: 'Estimulación temprana',
      image: 'aros.jpg',
      informacion: `Durante esta etapa, se fomenta el <b>movimiento</b> libre. El bebé,
          tiene la libertad de desplazarse por todo el aula y <b>manipular</b> los
          diferentes materiales que estén a su alcance. <br /><br />
          Presentamos a nuestros bebés <b>oportunidades</b> para explorar,
          adquirir destrezas y habilidades a su vez que <b>motivamos</b> su
          potencial y fortalecemos su autoestima, <b>iniciativa</b> y aprendizaje.`,
    },
    juego: {
      title: 'Juego Heuristico y experimentación',
      image: 'arena.jpg',
      informacion: ` Queremos que los niños se pregunten para qué sirven los objetos que les
          mostramos, los <b>clasifiquen</b>, <b>investiguen</b> y los
          <b>exploren</b> por sí mismos.`,
    },
    expresion: {
      title: 'Expresion Plástica y Músical',
      image: 'pintura.jpg',
      informacion: `Ofrecemos a los niños los medios para que se <b>expresen</b>,
          <b>creen</b> e <b>imaginen</b>. <br /><br />
          Además, mediante instrumentos <b>musicales</b>, objetos de la vida
          cotidiana y nuestro propio cuerpo <b>exploraremos</b> el mundo de la
          música.`,
    },
    huerto: {
      title: 'Huerto',
      image: 'regar.jpg',
      informacion: `Desde Little Rainbows sabemos el gran valor
        educativo que se adquiere al <b>cuidar</b> un espacio
        como un pequeño <b>huerto</b> desde tan temprana
        edad, de ahí parte nuestra originalidad. Nuestros
        niños aprenden a compartir, trabajar en grupo y
        concienciarles de la <b>importancia</b> de las <b>plantas</b>, el
        <b>agua</b> y los ciclos naturales.
        `,
    },
  };

  get datos() {
    return { ...this._datos };
  }

  get metodologia() {
    return Object.values(this._metodologia);
  }

  constructor() {}
}
