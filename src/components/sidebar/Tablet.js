const Tablet = () => {
  return (
    <sidebar className="tablet-sidebar">
        
        {/* Logo */}
        <div className="logo-tablet-sidebar">
            <div class="row">

                {/* Logo Image */}
                <div class="col-12 text-center">
                    <i class="fa-brands fa-docker" style={{fontSize: "50px"}}></i>
                </div>

                {/* Logo Shorthand Text */}
                <div class="col-12 text-center">
                    <h5 className="text-white font-weight-bold">Docker</h5>
                </div>

            </div>
        </div>

        {/* Divider */}
        <hr className="divider"/>

        {/* Link Icon */}
        <div className="text-center">
            
            <div class="row my-3">
                <div class="col-12">
                    <i class="fa-solid fa-house icon-tablet-sidebar active"></i>
                </div>
            </div>
            
            <div class="row my-3">
                <div class="col-12">
                    <i class="fa-solid fa-square-check icon-tablet-sidebar "></i>
                </div>
            </div>
            
            <div class="row my-3">
                <div class="col-12">
                    <i class="fa-solid fa-envelope icon-tablet-sidebar "></i>
                </div>
            </div>
            
            <div class="row my-3">
                <div class="col-12">
                    <i class="fa-solid fa-folder icon-tablet-sidebar "></i>
                </div>
            </div>
            
            <div class="row my-3">
                <div class="col-12">
                    <i class="fa-solid fa-user icon-tablet-sidebar "></i>
                </div>
            </div>

        </div>

    </sidebar>
  )
}

export default Tablet