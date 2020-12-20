import React from 'react'

const Lion = ({lion}) => {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Name : {lion.name}</h4>
                </div>
                <div className="col-md-3">
                    <h4>King? : {lion.isKing?  "Yes" : "Nope"}</h4>
                </div>
            </div>
        </div>
    )
}

export default Lion
