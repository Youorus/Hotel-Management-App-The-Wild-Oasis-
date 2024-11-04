import { cleanFileName } from "../utils/helpers";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabins could not be delete");
  }
  return data;
}

export async function createNewCabin(newCabin) {
  const imageName = `${Math.random()}-${cleanFileName(
    newCabin.image.name
  )}`.replaceAll("/", "");

  // Téléchargement de l'image d'abord
  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error("Erreur de téléchargement de l'image :", storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  // Chemin d'accès à l'image après téléchargement
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  // Création de la cabine
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error("Erreur lors de la création de la cabine :", error);
    throw new Error("cabins could not be created");
  }

  return data;
}
