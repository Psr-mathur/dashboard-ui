import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

const Leftpart = () => {
	return (
		<div className="leftpartContainer">
			<div className="lpc">
				<div>
					<h3>LOGO</h3>
				</div>
				<div>
					<h1>Board.</h1>
				</div>
				<div>
					<a href="https://github.com/Psr-mathur">
						<GitHubIcon fontSize="medium" />
					</a>
					<a>
						<TwitterIcon fontSize="medium" />
					</a>
					<a href="https://www.linkedin.com/in/prakash-kumar-a9685a190/">
						<LinkedInIcon fontSize="medium" />
					</a>
					<a href="https://idkprakash.onrender.com">
						<PublicIcon fontSize="medium" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Leftpart;
