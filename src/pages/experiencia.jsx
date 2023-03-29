import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Experiencia() {
    return (
        <div>
             <h1 id="experiencia" className='text-center' style={{ fontStyle: "italic" , fontWeight: 'bold' }}>Conóceme</h1> 
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontStyle: "italic"}}>Perfil</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontStyle: "italic"}}>
                        "Soy una persona altamente responsable y comprometida con mi trabajo. Me esfuerzo por cumplir con mis tareas de manera eficiente y con gran atención al detalle. Disfruto del trabajo en equipo, ya que creo que la colaboración es la clave para lograr los objetivos de manera efectiva y eficiente. Siempre en busca de oportunidades para aprender y mejorar, ya sea a través de la capacitación formal o simplemente de la experiencia diaria. Me siento cómodo trabajando en situaciones desafiantes y me gusta buscar soluciones creativas a los problemas que enfrento. Me esfuerzo por ser abierto y receptivo a los consejos y sugerencias de los demas, ya que creo que esto me ayuda a mejorar continuamente mi desempeño".
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{ fontStyle: "italic"}}>Formación</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ fontStyle: "italic"}}>
                 
                        <h3>FULL STACK WEB DEVELOPER</h3>
                        <p>4Geeks Academy | Septiembre 2022 - Marzo 2023</p>



                        <h3>
                            KINESIÓLOGO - LICENCIADO EN KINESIOLOGÍA
                        </h3>
                        <p>Universidad San Sebastian | 2009 - 2016</p>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography style={{ fontStyle: "italic"}}>Desarrollador Web Full Stack</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontStyle: "italic"}}>
                        Actualmente en búsqueda de experiencia en el mundo del desarrollo web y tecnología.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography style={{ fontStyle: "italic"}}>Antecedentes laborales</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  

                        <h3>KINESIÓLOGO</h3>
                        <p>Kinesiólogo particular | domiciliario | Servicio público | Diciembre 2017 - Actualidad</p>

                        <p>
                            Rehabilitacion Musculoesquelética.
                        </p>
                        <ul>
                            <li>Rehabilitación Respiratoria.</li>
                            <li>Atención en Servicio de Medicina, Sala IRA, Sala ERA y visitas domiciliarias en el Hospital de Fresia. | 2018 </li>
                            <li>Programa campaña de Invierno en Fresia. | 2019</li>
                        </ul>

                        <h3>SUPERVISOR</h3>
                        <p>Local de suplementos alimenticios "MUSCLE-UP" | 2022 - Actualidad</p>
                        <ul>
                            <li>Manejo de caja.</li>
                            <li>Inventario. </li>
                            <li>Apoyo en Ventas.</li>
                        </ul>
                        <h3>VENDEDOR Y ASESOR DEPORTIVO</h3>
                        <p>Local de suplementos alimenticios "MUSCLE-UP" | 2020 - 2022</p>
                        <ul>
                            <li>Asesoria deportiva y en rehabilitación.</li>
                            <li>Manejo de caja.</li>
                            <li>Inventario. </li>
                            <li>Reparto a domicilio.</li>
                        </ul>
      
                </AccordionDetails>
            </Accordion>
        </div>
    );
}