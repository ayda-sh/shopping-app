const Products = (item) => {  

  const { title, image, price, id } = item;  

  return (  
    <div className="flex justify-between w-[800px] border border-[#1E293B0A] rounded-2xl p-5 items-center" key={id}>  
      <div className="flex items-center gap-8">  
        <div className="border border-[#E2E8F0] rounded-lg p-3">  
          <img src={image[0]} alt={title} />   
        </div>  
        <div>  
          <h3 className="text-base text-[#1E293B] font-semibold">{title}</h3>  
          <div className="flex items-center gap-5 mt-2">  
            <span className="text-[#1E293B] text-sm">$ {price}</span>  
            <button>  
              <img src="src/assets/Trash Can.png" alt="Delete" />   
            </button>  
          </div>  
        </div>  
      </div>  

      <div className="flex gap-7">  
        <button className="text-[#CBD5E1] border-2 border-[#CBD5E1] w-[25px] h-[25px] rounded-lg hover:bg-[#F97316] hover:text-white hover:border-[#F97316]">  
          -  
        </button>  
        <span>0</span>  
        <button className="text-[#CBD5E1] border-2 border-[#CBD5E1] w-[25px] h-[25px] rounded-lg hover:bg-[#F97316] hover:text-white hover:border-[#F97316]">  
          +  
        </button>  
      </div>  
    </div>  
  );  
};  

export default Products;  