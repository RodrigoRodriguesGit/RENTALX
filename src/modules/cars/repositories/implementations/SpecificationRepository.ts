import { Specification } from '../../model/Specification';
import 
{ 
    ISpecificationRepository, 
    ICreateSpecificationDTO 
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    // Cria a Categoria
    create ({name, description}: ICreateSpecificationDTO): void {

        const specifications = new Specification();

        Object.assign(specifications, {
            name, 
            description, 
            create_at: new Date()
        });

        this.specifications.push(specifications);

    }

    findByName (name: string): Specification {
        const specifications = this.specifications.find((specifications) => specifications.name === name);
        return specifications;
    }

}

export { SpecificationRepository }