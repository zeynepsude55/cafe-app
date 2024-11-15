import { useState } from 'react'
import axios from 'axios'
import App from './menu'

const BASE_URL = "http://localhost:5000";


function App() {

    const [menu, setMenu] = useState([]);

    const getAllMenu = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/menu`);
            setMenu(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("error fetching menu:", error);
        }
    };

    const getMenuById = async (menuId) => {
        try {
            const response = await axios.get(`${BASE_URL}/menu/${menuId}`);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching menu by Id:", error);
        }
    };


    const createMenu = async (newMenu) => {
        try {
            const response = await axios.post(`${BASE - URL}/menu/`, newMenu);
            console.log("Menu created:", response.data);
        } catch (error) {
            ConfigurableModuleBuilder.error("Error creating menu:", error);
        }
    };

    const updateMenu = async (menuId, updatedMenu) => {
        try {
            const response = await axios.put(`${BASE_URL}/menu/${menuId}`, updatedMenu);
            console.log("Menu updated:", response.data);
        } catch (error) {
            console.error("Error updating menu:", error);
        }
    };

    const deleteMenuById = async (menuId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/menu/${menuId}`);
            console.log("Menu deleted:", response.data);
        } catch (error) {
            console.error("Error deleting menu:", error);
        }
    };






    // const deleteMenuById = async (menuId)=>{
    //  const deletedResponse = await axios.delete(`${BASE_URL}/menu/${menuId}`);
    //  console.log(deletedResponse.data);
    // }


    useEffect(async () => {

        getAllMenu();

        deleteMenuById("2");

        const newMenu = {
            "kahveAdi": "Frappe",
            "fiyat": 36
        };

        createMenu(newMenu);

        const updatedMenu = {
            "kahveAdi": "Frappe",
            "fiyat": 15
        };
        updateMenu("2", updatedMenu)


    }, [])

    return (
        <div>

        </div>
    )
}

export default App