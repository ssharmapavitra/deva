import React from "react";

export default function Result() {
	return (
		<div>
			<div className="table-responsive">
				<table className="table table-striped table-hover">
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
	);
}
