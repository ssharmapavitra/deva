import React from "react";
export default function CandidateCard() {
	return (
		<div className="CardWidth">
			<div className="row row-cols-1 row-cols-md-3 g-3">
				<div className="col-sm-3">
					<div className="card">
						<img
							src="https://media-exp1.licdn.com/dms/image/C5103AQGd1Q7QeOkk2w/profile-displayphoto-shrink_400_400/0/1570086262982?e=1660780800&v=beta&t=tunvS0gMCZRMgioZ9fXQSBk6nZGytgQ-_oPLTCON7rw"
							class="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Pavitra Sharma</h5>
							<p className="card-text">
								I am an engineering student pursuing my B.Tech degree in
								Information Technology from University Institute of Technology,
								R.G.P.V. Bhopal.
							</p>
							<a
								href="https://www.linkedin.com/in/ssharmapavitra/"
								className="btn btn-primary"
							>
								View More
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="card">
						<img
							src="https://media-exp2.licdn.com/dms/image/C4D03AQFuF5bw_De0gw/profile-displayphoto-shrink_200_200/0/1642248891098?e=1661385600&v=beta&t=kxaYXHoCu1tqsReQ7ZXtEJfKh6qUNAmH1gQc1j4vtpg"
							class="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Gyaneshwari Sharma</h5>
							<p className="card-text">
								A Third Year undergraduate student pursuing Bachelors in
								Technology(B.Tech), Information Technology, in University
								Institute of Technology Rajiv Gandhi Prodyougiki
								Vishwavidyalaya(UIT-RGPV), Bhopal
							</p>
							<a
								href="https://www.linkedin.com/in/gyaneshwari-sharma/"
								className="btn btn-primary"
							>
								View More
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="card">
						<img
							src="https://media-exp2.licdn.com/dms/image/C4D03AQF-hPMBsGGReA/profile-displayphoto-shrink_200_200/0/1655884750984?e=1661385600&v=beta&t=b1GmxitVNA-Bout1119QY8bMLTjjsx-cL1zBSLL-3Ck"
							class="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Shashwat Dixit</h5>
							<p className="card-text">
								I am an engineering student pursuing my B.Tech degree in
								Information Technology from University Institute of Technology,
								R.G.P.V. Bhopal.
							</p>
							<a
								href="https://www.linkedin.com/in/shashwat-dixit-143129202/"
								className="btn btn-primary"
							>
								View More
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
