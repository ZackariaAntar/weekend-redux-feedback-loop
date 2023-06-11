import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NextButton from "../NextButton/NextButton";

function UnderstandingField() {
    const [understanding, setUnderstanding] = useState('')
    const dispatch = useDispatch()

    // const inputStore = useSelector(store => store.inputStore)
    console.log(understanding);
	return (
		<>
			<h1 className="section-header">
				How well are you understanding the content?
			</h1>
			<div className="input-wrapper">
				<label className="InputLabel">
					<p>Understanding?</p>

					<input
						className="num-input"
						value={understanding}
						type="number"
						placeholder="1-5"
						onChange={(e) => setUnderstanding(e.target.value)}
					/>
				</label>
			</div>
			<NextButton
				used={understanding}
				onLink={dispatch({
					type: "ADD_REFLECTION",
					payload: { understanding: understanding },
				})}
				path={"/support"}
			/>
		</>
	);
}

export default UnderstandingField;




