import React from "react";

export default function Result() {
	return (
		<div>
			{/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Result
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">These are the final Poll Results</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
	  <div classNameName="table-responsive">
				<table classNameName="table table-striped table-hover">
					<thead>
						<tr>
							<th scope="col">Candidates</th>
							<th scope="col">Votes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Pavitra</td>
							<td id="candidate-1"></td>
						</tr>
						<tr>
							<td>Gyaneshwari</td>
							<td id="candidate-2"></td>
						</tr>
						<tr>
							<td>Shashwat</td>
							<td id="candidate-3"></td>
						</tr>
					</tbody>
				</table>
			</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">New Poll</button>
      </div>
    </div>
  </div>
</div>
			
		</div>
	);
}
