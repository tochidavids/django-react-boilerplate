import { useEffect, useRef, useState } from "react";
import { createWorkspace, getDatabaseData } from "../../main";
import svg from "../../assets/add-workspace.svg";
import Select from "react-select";

export default function AddNewWorkspace({ setShowAddWorkspace }) {
	const [currentUser, setCurrentUser] = useState();
	const [selectOptions, setSelectOptions] = useState();
	const [membersList, setMembersList] = useState([]);

	const formRef = useRef({});

	useEffect(() => {
		const getData = async () => {
			let users = await getDatabaseData("users");
			const currentUser = await getDatabaseData("current-user");
			users = users.filter(user => !(user.id === currentUser[1].id));
			let selectOptions = [];
			// users.map(() =>)
			users.forEach(user => {
				selectOptions.push({
					value: user.id,
					label: `${user.first_name} ${user.last_name} (${user.email})`,
				});
			});
			setSelectOptions(selectOptions);
			setCurrentUser(currentUser[1]);
		};
		getData();
	}, []);

	const inputStyles = {
		width: "350px",
		border: "2px solid #091e420f",
		borderRadius: "3px",
		height: "2.5rem",
		fontSize: "14px",
		padding: "0 0.5rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<>
			<div className="add-background"></div>
			<div className="add-workspace">
				<i
					className="fa-solid fa-xmark grey-hover"
					onClick={() => setShowAddWorkspace(false)}
				></i>
				<form
					onSubmit={event => {
						event.preventDefault();
						let newMembersList = [];
						membersList.forEach(member =>
							newMembersList.push(member.value),
						);
						createWorkspace({
							name: formRef.current.name.value,
							description: formRef.current.description.value,
							creator: currentUser.id,
							members: newMembersList,
						});
						console.log("new workspace:", {
							name: formRef.current.name.value,
							description: formRef.current.description.value,
							creator: currentUser.id,
							members: newMembersList,
						});
						setShowAddWorkspace(false);
					}}
				>
					<h1>{"Let's build a Workspace"}</h1>
					<h2>
						Boost your productivity by making it easier for everyone
						to access boards in one location.
					</h2>
					<ul>
						<li>
							<label htmlFor="name">Workspace name</label>
							<input
								type="text"
								placeholder="Taco's Co."
								id="name"
								ref={ref => (formRef.current["name"] = ref)}
							/>
						</li>
						<li>
							<label htmlFor="members">Workspace members</label>
							<Select
								options={selectOptions}
								isClearable
								isSearchable
								isMulti
								id="members"
								placeholder="John Smith (johnsmith@email.com)"
								onChange={value => setMembersList(value)}
								styles={{
									control: (baseStyles, state) => ({
										...baseStyles,
										...inputStyles,
										borderColor: state.isFocused
											? "#091e420f"
											: "#0055cc",
									}),
									valueContainer: baseStyles => ({
										...baseStyles,
										...inputStyles,
										border: "none",
										overflow: "auto",
									}),
								}}
								maxMenuHeight="8rem"
							/>
						</li>
						<li>
							<label htmlFor="description">
								Workspace description
							</label>
							<textarea
								placeholder="Our team organises everything here"
								id="description"
								ref={ref =>
									(formRef.current["description"] = ref)
								}
							/>
						</li>
					</ul>
					<input type="submit" value="Create" />
				</form>
				<div className="right">
					<div className="img-container">
						<img src={svg} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
