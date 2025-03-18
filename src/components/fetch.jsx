const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/users')
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);

    return (
      <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
         </ul>
</div>
     );
   };

   export default UserList;
   
   const addUser = (userData) => {
    axios.post('http://localhost:5000/api/users', userData)
      .then((response) => {
        console.log('User added:', response.data);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };
