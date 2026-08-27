'use client';
import { useParams } from "next/navigation";

export default function ProductsPage(){
    const params = useParams();
    
    
    return <div>
        product {params.id} page
    </div>
}