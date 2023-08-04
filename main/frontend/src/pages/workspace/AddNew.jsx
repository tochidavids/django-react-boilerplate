import { useEffect, useState } from "react";
import { getDatabaseData } from "../../main";
import svg from '../../assets/add-workspace.svg'

export default function AddNewWorkspace() {
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
		<div className="add-workspace">
			<div className="container">
				<form>
					<h1>{"Let's build a Workspace"}</h1>
					<h2>
						Boost your productivity by making it easier for everyone
						to access boards in one location.
					</h2>
					<label htmlFor="name">Workspace name</label>
					<input type="text" placeholder="Taco's Co." name="name" />
					<label htmlFor="description">Workspace description</label>
					<input
						type="text"
						placeholder="Taco's Co."
						name="description"
					/>
					<input list="members" name="browser" />
					<datalist id="members">
						{users &&
							users.map((user, index) => (
								<option value={user} key={index} />
							))}
					</datalist>
					<input type="submit" />
				</form>
				<img src={svg} alt="" />
			</div>
		</div>
	);
}
