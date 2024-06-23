package com.example.demoweb.controller;

import com.example.demoweb.entities.Persona;
import com.example.demoweb.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/personas")
public class PersonaController {

    @Autowired
    private PersonaService personaService;

    @GetMapping
    public String listarPersonas(Model model){
        List<Persona> personas = personaService.obtenerTodas();
        model.addAttribute("listarPersonas", personas);

        return "listar";
    }
    @GetMapping("/crear")
    public String formCrearPersona(Model model){

        model.addAttribute("persona", new Persona());
        model.addAttribute("accion", "/personas/crear");
        return "formulariocrear";
    }
    @PostMapping("/crear")
    public String guardarPersona(@ModelAttribute Persona persona){
        personaService.crearPersona(persona);

        return "redirect:/personas";
    }
    @GetMapping("/editar/{id}")
    public String actualizarPersona(
            @PathVariable Long id,
            @ModelAttribute Persona persona,
            Model model
    ){
        personaService.crearPersona(persona);
        model.addAttribute("persona", persona);
        model.addAttribute("accion", "/personas/editar/"+id);

        return "formularioeditar";
    }
    @PostMapping("/editar/{id}")
    public String actualizarPersona(@PathVariable Long id, @ModelAttribute Persona persona){
        personaService.actualizarPersona(id, persona);
        return "redirect:/personas";
    }
    @GetMapping("/eliminar/{id}")
    public String eliminarPersona(@PathVariable Long id){
        personaService.eliminarPersona(id);
        return "redirect:/personas";
    }
}
