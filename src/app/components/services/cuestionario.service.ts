import { Injectable } from '@angular/core';

@Injectable()
export class CuestionarioService {

  private preguntas: any = [
    {
      id: '1',
      pregunta: "¿Cuál es el objetivo primario de su portafolio de inversión?",
      grupo: 1,
      alternativas: [
        {
          idAlternativa: 1,
          detalle: 'Seguridad.- Prefiero la seguridad de mis inversiones, así la rentabilidad en el tiempo se encuentre por debajo de los niveles de inflación (2% anual).',
          puntaje: 0
        },
        {
          idAlternativa: 2,
          detalle: 'Protección a la inflación.- Estoy dispuesto a aceptar sólo un nivel bajo de variación en mi inversión a cambio de una rentabilidad que me proteja de la inflación.',
          puntaje: 2
        },
        {
          idAlternativa: 3,
          detalle: 'Crecimiento y seguridad.- Quiero un balance entre crecimiento y seguridad, y estoy dispuesto a aceptar un nivel medio de variación en el valor de mi inversión con la finalidad de alcanzar una rentabilidad mayor a la inflación.',
          puntaje: 4
        },
        {
          idAlternativa: 4,
          detalle: 'Crecimiento.- Estoy interesado en generar crecimiento en mi inversión en el tiempo, y estoy menos preocupado por las fluctuaciones que éste pueda registrar en la búsqueda del retorno.',
          puntaje: 6
        },
        {
          idAlternativa: 5,
          detalle: 'Máximo crecimiento.- Mi único objetivo es el máximo crecimiento de mi inversión en el tiempo y puedo tolerar altos niveles de fluctuación en el valor de mi inversión en la búsqueda del retorno.',
          puntaje: 8
        }
      ]
    },
    {
      id: '2',
      pregunta: "¿Requiere generar ingresos corrientes los cuales retirará periódicamente?",
      grupo: 1,
      alternativas: [
        {
          idAlternativa: 6,
          detalle: 'Sí, de más de 3% anual del patrimonio invertido',
          puntaje: 3
        },
        {
          idAlternativa: 7,
          detalle: 'Sí, de menos de 3% anual del patrimonio invertido',
          puntaje: 5
        },
        {
          idAlternativa: 8,
          detalle: 'No, y de generarse ingresos, prefiero que sean reinvertidos para favorecer el crecimiento de mi inversión',
          puntaje: 7
        }
      ]
    },
    {
      id: '3',
      pregunta: "¿Cuánto tiempo estima que podrá mantener su portafolio invertido en la    estrategia que le sea recomendada sin que requiera realizar un retiro significativo de sus fondos?",
      grupo: 1,
      alternativas: [
        {
          idAlternativa: 9,
          detalle: 'Menos de 1 año',
          puntaje: 0
        },
        {
          idAlternativa: 10,
          detalle: 'Entre 1 y 3 años',
          puntaje: 2
        },
        {
          idAlternativa: 11,
          detalle: 'Entre 3 y 5 años',
          puntaje: 4
        },
        {
          idAlternativa: 12,
          detalle: 'Más de 5 años',
          puntaje: 8
        }
      ]
    },
    {
      id: '4',
      pregunta: "¿Cuál de las siguientes afirmaciones describe mejor sus necesidades de liquidez?",
      grupo: 1,
      alternativas: [
        {
          idAlternativa: 13,
          detalle: 'Requiero convertir la mayor parte de mi portafolio en efectivo para el próximo año.',
          puntaje: 0
        },
        {
          idAlternativa: 14,
          detalle: 'Requiero convertir la mayor parte de mi portafolio en efectivo para el próximo año.',
          puntaje: 2
        },
        {
          idAlternativa: 15,
          detalle: 'No creo que requiera realizar ningún retiro de mi portafolio que sea mayor al ingreso que éste genere. En caso de una emergencia, no espero retirar más del 10% del capital invertido el próximo año.',
          puntaje: 4
        },
        {
          idAlternativa: 16,
          detalle: 'No creo que requiera realizar ningún retiro de mi portafolio que sea mayor al ingreso que éste genere. En caso de una emergencia, cuento con otros recursos que me permitirían cubrir dicha necesidad por un plazo de 1 a 3 años.',
          puntaje: 6
        },
        {
          idAlternativa: 17,
          detalle: 'Tengo capacidad de asumir una estrategia de inversión de largo plazo. No requiero estos excedentes en un horizonte de 3 a 5 años y en caso de una  emergencia, dispongo de otros recursos para atenderla.',
          puntaje: 8
        }
      ]
    },
    {
      id: '5',
      pregunta: "¿Con cuál de las siguientes trayectorias hipotéticas en su inversión se   sentiría más cómodo?",
      grupo: 2,
      img: 'grafico1.png',
      alternativas: [
        {
          idAlternativa: 18,
          detalle: 'Portafolio A',
          puntaje: 0
        },
        {
          idAlternativa: 19,
          detalle: 'Portafolio B',
          puntaje: 2
        },
        {
          idAlternativa: 20,
          detalle: 'Portafolio C',
          puntaje: 4
        },
        {
          idAlternativa: 21,
          detalle: 'Portafolio D',
          puntaje: 6
        },
        {
          idAlternativa: 22,
          detalle: 'Portafolio E',
          puntaje: 8
        }
      ]
    },
    {
      id: '6',
      pregunta: "Si un activo dentro de su portafolio de inversión cayera en 25% en un    horizonte de un año, ¿qué haría?",
      grupo: 2,
      alternativas: [
        {
          idAlternativa: 23,
          detalle: 'Vendería inmediatamente dicha inversión a pesar de realizar la pérdida. Este tipo de inversiones no encaja en mi perfil.',
          puntaje: 0
        },
        {
          idAlternativa: 24,
          detalle: 'Mantendría la inversión hasta que regrese a su valor inicial para luego venderla y sustituirla por algo menos volátil.',
          puntaje: 2
        },
        {
          idAlternativa: 25,
          detalle: 'La mantendría porque las fluctuaciones en los precios de mercado son     probables. Yo estoy pensando en la rentabilidad que me va a generar en el largo   plazo.',
          puntaje: 4
        },
        {
          idAlternativa: 26,
          detalle: 'Compraría más de esa inversión. Sería una gran oportunidad de promediar el precio a la baja y, por lo tanto, mejorar el rendimiento de largo plazo de mi  portafolio.',
          puntaje: 8
        }
      ]
    },
    {
      id: '7',
      pregunta: "Dado que los portafolios muestran fluctuaciones, ¿cuánto tiempo estaría    dispuesto a esperar a que sus inversiones reviertan una pérdida temporal?",
      grupo: 2,
      alternativas: [
        {
          idAlternativa: 27,
          detalle: 'Menos de 3 meses',
          puntaje: 0
        },
        {
          idAlternativa: 28,
          detalle: 'De 3 a 6 meses',
          puntaje: 2
        },
        {
          idAlternativa: 29,
          detalle: 'De 6 meses a 1 año',
          puntaje: 4
        },
        {
          idAlternativa: 30,
          detalle: 'Entre 1 y 2 años',
          puntaje: 6
        },
        {
          idAlternativa: 31,
          detalle: 'De 2 a 3 años',
          puntaje: 8
        }
      ]
    },
    {
      id: '8',
      pregunta: "Las crisis financieras no son el estado habitual del mercado. Sin embargo,    considerando el retorno anual promedio y la máxima caída que se registraría en una crisis, ¿cuál de las siguientes opciones te parece la más adecuada?",
      img: 'cuadro_portafolio.png',
      grupo: 2,
      alternativas: [
        {
          idAlternativa: 32,
          detalle: 'Portafolio A',
          puntaje: 0
        },
        {
          idAlternativa: 33,
          detalle: 'Portafolio B',
          puntaje: 2
        },
        {
          idAlternativa: 34,
          detalle: 'Portafolio C',
          puntaje: 4
        },
        {
          idAlternativa: 35,
          detalle: 'Portafolio D',
          puntaje: 6
        },
        {
          idAlternativa: 36,
          detalle: 'Portafolio E',
          puntaje: 8
        }
      ]
    }
  ];

  constructor() { }

  getPreguntas() {
    return this.preguntas;
  }
}

