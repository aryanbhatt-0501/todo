import React, {useState, useEffect} from 'react'
import { fetchTasks } from '../api/fetch'
import './styles.css'

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTasks = async () => {
          try {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
          } catch (error) {
            console.error('Error fetching tasks:', error);
          } finally {
            setLoading(false);
          };
        };
    
        getTasks();
    }, []);
    
    if (loading) {
        return <span>Loading...</span>
    }
    
  return (
    <div className='cardContainer'>
        {tasks.map(t => {
            return (
                <span className='taskCard' key={t.id}>
                    {t.id}
                    {t.title}
                </span>
            )
        })}
    </div>
  );
};

export default AllTasks;