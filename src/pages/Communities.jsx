import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { Search, Users } from "lucide-react";
import CardCommunities from '../Components/cardCommunity';
import getcommunities from '../services/CommunityServices';
import { useNavigate } from 'react-router-dom';

function Communities() {
  

const navigate = useNavigate()
  const [communities, setCommunities] = useState([])
  
  useEffect(() => {
    async function loadCommunities() {
      try {
        const data = await getcommunities()
        setCommunities(data)
      } catch (e) {
        console.error(e)
        navigate('/homepage')
      }
    }
  
    loadCommunities()
  }, [])
  return (

      <div className="lex items-center justify-center min-h-screen bg-gray-800">
        <header>
          <NavBar />
        </header>

        <div className="px-8 mt-6">
          <div className="flex items-center bg-gray-700 rounded-2xl px-4 py-3 shadow-sm border-gray-700">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Pesquisar comunidades..."
              className="ml-3 w-full outline-none bg-transparent text-white"
            />
          </div>
        </div>

        <CardCommunities communities={communities} />

      </div>
    );
  }

  export default Communities
