import Certifications from '../Certifications/Certifications.jsx';
import Experience from '../Experience/Experience.jsx';
import Header from '../Header/Header.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import ProfileHeader from '../profileHeader/profileHeader.jsx';
import Qualifications from '../Qualifications/Qualifications.jsx';
import { useEffect, useState } from 'react';
import { currentUser } from '../../utils/authServices.js';

const Main = ({ profile }) => {
	const [User, setUser] = useState(0);

	useEffect(() => {
		setUser(currentUser());
	}, []);

	return (
		<>
			{User && (
				<div>
					<Header displayName={profile.profileHeader.displayName} />
					<Navbar />
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<ProfileHeader user={profile.profileHeader} className="profile-header" />
								<div className="row">
									<div className="col-lg-7">
										<Experience experienceData={profile.experience} className="experience" />
									</div>
									<div className="col-lg-5">
										<Certifications certificationsData={profile.certifications} className="certifications" />
										<Qualifications qualificationsData={profile.qualifications} className="qualifications" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Main;