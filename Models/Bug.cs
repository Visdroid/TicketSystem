using System.ComponentModel.DataAnnotations;

public class Bug{
    public int Id { get;set;}
    [Required]
    public string Summary{get;set;}
    [Required]
    public string Description{get;set;}
    public bool IsResolved{get;set;}
    public string CreatedBy {get;set;}
}