import { useEffect, useState } from "react";
import { getDatabaseData } from "../../main";
import svg from "../../assets/add-workspace.svg";

export default function AddNewWorkspace({ setShowAddWorkspace }) {
	const [users, setUsers] = useState();

	useEffect(() => {
		const getData = async () => {
			const users = await getDatabaseData("users");
			const currentUser = await getDatabaseData("current-user");
			setUsers(users.filter(user => !(user.id === currentUser[1].id)));
		};
		getData();
	}, []);

	return (
		<>
			<div className="add-background"></div>
			<div className="add-workspace">
				<i
					className="fa-solid fa-xmark grey-hover"
					onClick={() => setShowAddWorkspace(false)}
				></i>
				<form>
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
							/>
						</li>
						<li>
							<label htmlFor="members">Workspace members</label>
							<input
								list="members"
								name="browser"
								placeholder="John Smith"
							/>
							<datalist id="members">
								{users &&
									users.map((user, index) => (
										<option
											value={`${user.first_name} ${user.last_name}`}
											key={index}
										/>
									))}
							</datalist>
						</li>
						<li>
							<label htmlFor="description">
								Workspace description
							</label>
							<textarea
								placeholder="Our team organises everything here"
								id="description"
							/>
						</li>
					</ul>
					<input
						type="submit"
						value="Create"
						onClick={() => setShowAddWorkspace(false)}
					/>
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
