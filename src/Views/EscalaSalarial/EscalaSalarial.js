import React from 'react';
import './EscalaSalarial.css';
import EscalaS from './EscalaSalarial.json';

function EscalaSalarial (){
        const DatosJson = JSON.parse(JSON.stringify(EscalaS))
        console.log(DatosJson.Cat)
    return(
        <div className="EscalaSalarial">
            <div className="container">
                <h1 className="mt-4 mb-3"> Escala Salarial</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a className="Referencia" href="/">Inicio</a>
                    </li>
                    <li class="breadcrumb-item active">Escala Salarial</li>
                </ol>
                <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th scope="col">Escalafón</th>
                        <th scope="col">Cat.</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Remuneración</th>
                        <th scope="col">Gasto Representación</th>
                        <th scope="col">Comp. R. Cargo</th>
                        <th scope="col">Asignación Remunerativa Bonificable</th>
                        <th scope="col">Adicional Remunerativo Bonificable</th>
                        <th scope="col">Adicional Remunerativo Bonificable 2017</th>
                        <th scope="col">Comp. Mayor Dedicación F.</th>
                        <th scope="col">TOTAL REMUNERATIVO BONIFICABLE</th>
                        <th scope="col">Adicional No Remunerativo</th>
                        <th scope="col">Art. 134 CP</th>
                        <th scope="col">Supl. No Remunerativo No Bon.</th>
                        <th scope="col">TOTAL BRUTO*</th>
                      </tr>
                    </thead>
                    <tbody>
                        {DatosJson.map((postDetail) =>
                                <tr>
                                    <td>{postDetail.Escalafon}</td>
                                    <td>{postDetail.Categoria}</td>
                                    <td>{postDetail.Descripcion}</td>
                                    <td>{postDetail.Remuneracion}</td>
                                    <td>{postDetail.Gastos}</td>
                                    <td>{postDetail.CompRCargo}</td>
                                    <td>{postDetail.AsignacionRB}</td>
                                    <td>{postDetail.AdicionalRB}</td>
                                    <td>{postDetail.AdicionalRBA}</td>
                                    <td>{postDetail.CompMayorDF}</td>
                                    <td>{postDetail.TotalRB}</td>
                                    <td>{postDetail.AdicionalNoR}</td>
                                    <td>{postDetail.Art134}</td>
                                    <td>{postDetail.SuplNoRNB}</td>
                                    <td>{postDetail.TotalBruto}</td>
                                    </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
            
        </div>
        
    );
}
export default EscalaSalarial;