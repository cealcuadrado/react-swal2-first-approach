import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Layout extends React.Component {
    constructor() {
        super();
        
        this.openDialogBox = this.openDialogBox.bind(this);
    }

    openDialogBox() {
        MySwal.fire(
            <p>Hola, mundo!</p>
        );
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.openDialogBox}>
                    <i className="fas fa-external-link-alt fa-fw"></i> Abrir cuadro de diálogo
                </button>
            </div>
        );
    }
}

export default Layout;