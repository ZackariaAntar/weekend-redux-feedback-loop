import {Route, Link } from "react-router-dom";

function FeedbackForm() {
    const postReflection = () =>{

    }
	return (
		<>
			<form>
				<Route>
					<label className="InputLabel">Feeling</label>
					<input
						type="text"
						placeholder="How are you feeling (1-5)"
					/>
				</Route>

				<Route>
					<label className="InputLabel">Understanding</label>
					<input
						type="text"
						placeholder="How well did you understand (1-5)"
					/>
				</Route>
				<Route>
					<label className="InputLabel">Support</label>
					<input
						type="text"
						placeholder="How supported did you feel (1-5)"
					/>
				</Route>

				<Route>
					<label className="InputLabel">Comments</label>
					<textarea placeholder="What comments do you have?" />
				</Route>
			</form>
		</>
	);
}

export default FeedbackForm;