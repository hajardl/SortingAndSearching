<script>
let x = 3;

    function dot_Product(vectA, vectB)
    {
   
        let product = 0;
        for (let i = 0; i < x; i++)
            product = product + vectA[i] * vectB[i];
        return product;
    }
   
    function cross_Product(vectA, vectB,cross)
   
    {
   
        cross[0] = vectA[1] * vectB[2]
                     - vectA[2] * vectB[1];
        cross[1] = vectA[2] * vect_B[0]
                     - vectA[0] * vectB[2];
        cross[2] = vectA[0] * vectB[1]
                     - vectA[1] * vectB[0];
    }


        document.write(dotProduct(vectA, vectB) + "<br/>");
        crossProduct(vectA, vectB, cross);
   

        for (let i = 0; i < x; i++)
   
            document.write(cross[i] + " ");           




//InsertionSort



function insertion_Sort(tab, n) 
{ 
    let i, j; 
    let indice;
    for (i = 1; i < n; i++)
    { 
        indice = tab[i]; 
        j = i - 1; 
        while (j >= 0 && tab[j] > indice)
        { 
            tab[j + 1] = tab[j]; 
            j = j - 1; 
        } 
        tab[j + 1] = indice; 
    } 
} 

   
</script>