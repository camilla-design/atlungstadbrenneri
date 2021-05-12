import MenyInnhold from "./MenyInnhold";

function MenyForside() {
  return (
    <div className="container mt-4">
      <div className="card-header-content">
        <h1>Atlungstad Brenneri menyer</h1>
        <div className="mt-2">
          <p>
            God mat betyr en god dag. Menyen vår består av et solid utvalg
            velsmakende og mettende retter laget av råvarer av ypperste
            kvalitet.
          </p>
        </div>
      </div>
      <div>
        <MenyInnhold />
      </div>
    </div>
  );
}

export default MenyForside;
