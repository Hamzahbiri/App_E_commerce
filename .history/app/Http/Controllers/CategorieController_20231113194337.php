<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorie = Categorie::all();
        return $categorie;
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $categorie = new Categorie([
            'nomCategorie'=>$request->input('nomCategorie'),
            'imageCategorie'=>$request->input('imageCategorie')

        ]);
        $categorie->save();
        return response()->json($categorie,201);
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $categorie = Categorie::find($id)

        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categorie $categorie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categorie $categorie)
    {
        //
    }
}
